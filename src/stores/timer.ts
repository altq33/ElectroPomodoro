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
    secondsLeft: 60,
    completedPomosCount: 0,
    setIsPaused: (value: boolean) => set({ isPaused: value }),
    setStage: (value: PomoStage) => set({ stage: value }),
    setSecondsLeft: (value: number) => set({ secondsLeft: value }),
    decrementSecondsLeft: () => set({ secondsLeft: get().secondsLeft!! - 1 }),
    switchMode: (settings: ISettingsStore & ISettingsActions) => {
      switch (get().stage) {
        case PomoStage.work:
          set({ completedPomosCount: get().completedPomosCount + 1 });
          if (get().completedPomosCount < settings.workPomoCount) {
            set({
              stage: PomoStage.break,
              secondsLeft: settings.breakTime * 60,
            });
          } else {
            set({
              completedPomosCount: 0,
              stage: PomoStage.rest,
              secondsLeft: settings.restTime * 60,
            });
          }
          break;
        case PomoStage.rest: // Два кейса групнуты чтоб не повторятть код со сменой стейджа и установкой секунд
        case PomoStage.break:
          set({ stage: PomoStage.work, secondsLeft: settings.workTime * 60 });
          break;
      }
    },

    setCompletedPomosCount: (value: number) =>
      set({ completedPomosCount: value }),
  }))
);
