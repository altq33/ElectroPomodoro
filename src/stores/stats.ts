import {
  ISettingsStore,
  ISettingsActions,
  ISoundOptions,
  IStatsStore,
  IStatsActions,
} from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStats = create<IStatsStore & IStatsActions>()(
  persist(
    (set, get) => ({
      todayPomo: 0,
      currentDate: new Date().toDateString(),
      todaySecondsWork: 0,
      todaySecondsRest: 0,
      streak: 0,
      totalPomos: 0,
      totalWorkDays: 0,
      totalWorkSeconds: 0,
      isWorkingToday: false,
      incrementStreak: () => set({ streak: get().streak + 1 }),
      incrementTotalWorkDays: () =>
        set({ totalWorkDays: get().totalWorkDays + 1 }),
      resetStreak: () => set({ streak: 0 }),
      setCurrentDay: (value) => set({ currentDate: value }),
      incrementTodayPomo: () =>
        set({
          todayPomo: get().todayPomo + 1,
          totalPomos: get().totalPomos + 1,
        }),
      incrementTodaySecondsRest: () =>
        set({ todaySecondsRest: get().todaySecondsRest + 1 }),
      incrementTodaySecondsWork: () => {
        set({
          todaySecondsWork: get().todaySecondsWork + 1,
          totalWorkSeconds: get().totalWorkSeconds + 1,
          isWorkingToday: true,
        });
      },
      setTodaySecondsRest: (value) => set({ todaySecondsRest: value }),
      setTodaySecondsWork: (value) => set({ todaySecondsWork: value }),
      resetDailyStats: () => {
        set({
          todayPomo: 0,
          currentDate: new Date().toDateString(),
          todaySecondsWork: 0,
          todaySecondsRest: 0,
          isWorkingToday: false,
        });
      },
      setIsWorkingToday: (value) => set({ isWorkingToday: value }),
    }),
    {
      name: "stats-storage",
    }
  )
);
