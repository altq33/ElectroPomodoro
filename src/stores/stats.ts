import {
  ISettingsStore,
  ISettingsActions,
  ISoundOptions,
  IStatsStore,
  IStatsActions,
  PomoStage,
} from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useTimer } from "./timer";
import { useSettings } from "./settings";
import { isPreviousDay } from "@/utils/utils";

export const useStats = create<IStatsStore & IStatsActions>()(
  persist(
    (set, get) => ({
      todayPomo: 0,
      currentDate: new Date().toLocaleDateString(),
      prevDate: new Date().toLocaleDateString(),
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
          totalWorkDays: get().isWorkingToday
            ? get().totalWorkDays
            : get().totalWorkDays + 1,
          isWorkingToday: true,
          streak: get().isWorkingToday ? get().streak : get().streak + 1,
        });
      },
      setTodaySecondsRest: (value) => set({ todaySecondsRest: value }),
      setTodaySecondsWork: (value) => set({ todaySecondsWork: value }),
      resetDailyStats: () => {
        const currentDateString = new Date().toLocaleDateString();
        set({
          todayPomo: 0,
          currentDate: currentDateString,
          prevDate: get().currentDate,
          todaySecondsWork: 0,
          todaySecondsRest: 0,
          isWorkingToday: false,
          streak: isPreviousDay(currentDateString, get().currentDate)
            ? get().streak
            : 0,
        });

        useTimer.setState({
          stage: PomoStage.work,
          secondsLeft: useSettings.getState().workTime,
          isPaused: true,
          completedPomosCount: 0,
        });
      },
      setIsWorkingToday: (value) => set({ isWorkingToday: value }),
    }),
    {
      name: "stats-storage",
    }
  )
);
