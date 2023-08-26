import { ISettings, ISettingsActions, ISoundOptions } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettings = create<ISettings & ISettingsActions>()(
  persist(
    (set, get) => ({
      workTime: 30,
      breakTime: 15,
      restTime: 30,
      workPomoCount: 3,
      isAutoStartWork: false,
      isAutoStartBreak: false,
      isAutoStartRest: false,
      breakTimeSound: {
        value: null,
        label: "Без звука",
      },
      workTimeSound: {
        value: null,
        label: "Без звука",
      },
      restTimeSound: {
        value: null,
        label: "Без звука",
      },
      volume: 0.5,
      setSettings: (state: ISettings) => set({ ...state }),
      setWorkTime: (value: number) => set({ workTime: value }),
      setBreakTime: (value: number) => set({ breakTime: value }),
      setRestTime: (value: number) => set({ restTime: value }),
      setWorkPomoCount: (value: number) => set({ workPomoCount: value }),
      setIsAutoStartWork: (value: boolean) => set({ isAutoStartWork: value }),
      setIsAutoStartBreak: (value: boolean) => set({ isAutoStartBreak: value }),
      setIsAutoStartRest: (value: boolean) => set({ isAutoStartRest: value }),
      setWorkTimeSound: (value: ISoundOptions) => set({ workTimeSound: value }),
      setBreakTimeSound: (value: ISoundOptions) =>
        set({ breakTimeSound: value }),
      setRestTimeSound: (value: ISoundOptions) => set({ restTimeSound: value }),
      setVolume: (value: number) => set({ volume: value }),
    }),
    {
      name: "settings-storage",
    }
  )
);
