import { ISettingsStore, ISettingsActions, ISoundOptions } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSettings = create<ISettingsStore & ISettingsActions>()(
  persist(
    (set, get) => ({
      workTime: 30,
      breakTime: 15,
      restTime: 30,
      workPomoCount: 3,
      isAutoStartWork: false,
      isAutoStartBreak: false,
      isAutoStartRest: false,
      pomoGoal: 1,
      options: [
        {
          value: null,
          label: "Без звука",
        },
        {
          value: "/src/assets/audio/Frog Sound Effect.mp3",
          label: "Лягушка",
        },
        { value: "/src/assets/audio/Cock Sound Effect.mp3", label: "Петух" },
        {
          value: "/src/assets/audio/Parrot - Sound Effect.mp3",
          label: "Попугай",
        },
        {
          value: "/src/assets/audio/Sound Effect Woody.mp3",
          label: "Вуди",
        },
        {
          value: "/src/assets/audio/Whistle Sound Effect.mp3",
          label: "Свист",
        },
      ],
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
      setSettings: (state: ISettingsStore) => set({ ...state }),
      setWorkTime: (value: number) => set({ workTime: value }),
      setBreakTime: (value: number) => set({ breakTime: value }),
      setRestTime: (value: number) => set({ restTime: value }),
      setWorkPomoCount: (value: number) => {
        set({ workPomoCount: value });
      },
      setIsAutoStartWork: (value: boolean) => set({ isAutoStartWork: value }),
      setIsAutoStartBreak: (value: boolean) => set({ isAutoStartBreak: value }),
      setIsAutoStartRest: (value: boolean) => set({ isAutoStartRest: value }),
      setWorkTimeSound: (value: ISoundOptions) => set({ workTimeSound: value }),
      setPomoGoal: (value: number) => set({ pomoGoal: value }),
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
