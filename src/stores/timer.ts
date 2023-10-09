import {
  ITimerStore,
  ITimerActions,
  PomoStage,
  ISettingsActions,
  ISettingsStore,
} from "@/types/types";
import { create, useStore } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { useSettings } from "./settings";
import { useStats } from "./stats";
import mainLogo from "@/assets/main-logo.svg";

export const useTimer = create<ITimerStore & ITimerActions>()(
  devtools(
    persist(
      (set, get) => ({
        isPaused: true,
        stage: PomoStage.work,
        secondsLeft: useSettings.getState().workTime * 60,
        completedPomosCount: 0,
        currentTimerId: null,
        setIsPaused: (value: boolean) => set({ isPaused: value }),
        setStage: (value: PomoStage) => set({ stage: value }),
        setSecondsLeft: (value: number) => set({ secondsLeft: value }),
        startTimer: () => {
          clearInterval(get().currentTimerId ?? "");
          const timerId = setInterval(() => {
            if (get().secondsLeft === 0) {
              get().switchMode(useSettings.getState());
              return;
            }
            get().decrementSecondsLeft();
            const statsState = useStats.getState();
            if (get().stage == PomoStage.work) {
              statsState.incrementTodaySecondsWork();
            } else {
              statsState.incrementTodaySecondsRest();
            }
          }, 1000);
          set({ currentTimerId: timerId, isPaused: false });
        },
        pauseTimer: () => {
          clearInterval(get().currentTimerId ?? "");
          set({ isPaused: true });
        },

        decrementSecondsLeft: () =>
          set({ secondsLeft: get().secondsLeft!! - 1 }),
        switchMode: (
          settings: ISettingsStore & ISettingsActions,
          isManualSwitch: boolean = false
        ) => {
          switch (get().stage) {
            case PomoStage.work:
              set({ completedPomosCount: get().completedPomosCount + 1 });
              useStats.getState().incrementTodayPomo();
              if (get().completedPomosCount < settings.workPomoCount) {
                if (settings.breakTimeSound.value && !isManualSwitch) {
                  const audio = new Audio(settings.breakTimeSound.value);
                  audio.volume = settings.volume;
                  audio.play();
                }
                if (!settings.isAutoStartBreak || isManualSwitch) {
                  get().pauseTimer();
                }
                if (!isManualSwitch) {
                  new Notification("Пора сделать перерыв!", {
                    icon: mainLogo,
                    requireInteraction: true,
                    tag: "newStage",
                  });
                }
                set({
                  stage: PomoStage.break,
                  secondsLeft: settings.breakTime * 60,
                });
                document.documentElement.dataset.theme = "break";
              } else {
                if (!settings.isAutoStartRest || isManualSwitch) {
                  get().pauseTimer();
                }
                if (settings.restTimeSound.value && !isManualSwitch) {
                  const audio = new Audio(settings.restTimeSound.value);
                  audio.volume = settings.volume;
                  audio.play();
                }
                if (!isManualSwitch) {
                  new Notification("Пора отдохнуть!", {
                    icon: mainLogo,
                    requireInteraction: true,
                    tag: "newStage",
                  });
                }

                set({
                  completedPomosCount: 0,
                  stage: PomoStage.rest,
                  secondsLeft: settings.restTime * 60,
                });

                document.documentElement.dataset.theme = "rest";
              }
              break;
            case PomoStage.rest:
            case PomoStage.break:
              if (settings.workTimeSound.value && !isManualSwitch) {
                const audio = new Audio(settings.workTimeSound.value);
                audio.volume = settings.volume;
                audio.play();
              }
              if (!isManualSwitch) {
                new Notification("Пора работать!", {
                  icon: mainLogo,
                  requireInteraction: true,
                  tag: "newStage",
                });
              }

              if (!settings.isAutoStartWork || isManualSwitch) {
                get().pauseTimer();
              }
              set({
                stage: PomoStage.work,
                secondsLeft: settings.workTime * 60,
              });

              document.documentElement.dataset.theme = "work";
              break;
          }
        },
        setMode: (
          settings: ISettingsStore & ISettingsActions,
          stage: PomoStage
        ) => {
          if (get().stage == stage) return;

          const newState: Partial<ITimerStore> = {
            stage,
            completedPomosCount:
              get().completedPomosCount < settings.workPomoCount
                ? get().stage == PomoStage.work
                  ? get().completedPomosCount + 1
                  : get().completedPomosCount
                : 0,
          };

          if (get().stage == PomoStage.work) {
            useStats.getState().incrementTodayPomo();
          }

          switch (stage) {
            case PomoStage.work:
              newState.secondsLeft = settings.workTime * 60;
              document.documentElement.dataset.theme = "work";
              break;
            case PomoStage.break:
              newState.secondsLeft = settings.breakTime * 60;
              document.documentElement.dataset.theme = "break";
              break;
            case PomoStage.rest:
              newState.secondsLeft = settings.restTime * 60;
              document.documentElement.dataset.theme = "rest";
          }
          get().pauseTimer();
          set(newState);
        },
        setCompletedPomosCount: (value: number) =>
          set({ completedPomosCount: value }),
      }),
      { name: "timerStore" }
    )
  )
);
