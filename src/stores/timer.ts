import {
  ITimerStore,
  ITimerActions,
  PomoStage,
  ISettingsActions,
  ISettingsStore,
} from "@/types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTimer = create<ITimerStore & ITimerActions>()(
  devtools((set, get) => ({
    isPaused: false,
    stage: PomoStage.work,
    secondsLeft: null,
    completedPomosCount: 0,
    setIsPaused: (value: boolean) => set({ isPaused: value }),
    setStage: (value: PomoStage) => set({ stage: value }),
    setSecondsLeft: (value: number) => set({ secondsLeft: value }),
    decrementSecondsLeft: () => set({ secondsLeft: get().secondsLeft!! - 1 }),
    switchMode: (
      settings: ISettingsStore & ISettingsActions,
      isManualSwitch: boolean = false
    ) => {
      switch (get().stage) {
        case PomoStage.work:
          set({ completedPomosCount: get().completedPomosCount + 1 });
          if (get().completedPomosCount < settings.workPomoCount) {
            if (settings.breakTimeSound.value && !isManualSwitch) {
              const audio = new Audio(settings.breakTimeSound.value);
              audio.volume = settings.volume;
              audio.play();
            }

            set({
              stage: PomoStage.break,
              secondsLeft: settings.breakTime * 60,
              isPaused: !settings.isAutoStartBreak,
            });
          } else {
            if (settings.restTimeSound.value && !isManualSwitch) {
              const audio = new Audio(settings.restTimeSound.value);
              audio.volume = settings.volume;
              audio.play();
            }

            set({
              completedPomosCount: 0,
              stage: PomoStage.rest,
              secondsLeft: settings.restTime * 60,
              isPaused: !settings.isAutoStartRest,
            });
          }
          break;
        case PomoStage.rest:
        case PomoStage.break:
          if (settings.workTimeSound.value && !isManualSwitch) {
            const audio = new Audio(settings.workTimeSound.value);
            audio.volume = settings.volume;
            audio.play();
          }
          set({
            stage: PomoStage.work,
            secondsLeft: settings.workTime * 60,
            isPaused: !settings.isAutoStartWork,
          });
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

      switch (stage) {
        case PomoStage.work:
          newState.secondsLeft = settings.workTime * 60;
          newState.isPaused = !settings.isAutoStartWork;
          break;
        case PomoStage.break:
          newState.secondsLeft = settings.breakTime * 60;
          newState.isPaused = !settings.isAutoStartBreak;
          break;
        case PomoStage.rest:
          newState.secondsLeft = settings.restTime * 60;
          newState.isPaused = !settings.isAutoStartRest;
      }

      set(newState);
    },
    setCompletedPomosCount: (value: number) =>
      set({ completedPomosCount: value }),
  }))
);
