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
      currentDay: 0,
      todayHours: 0,
    }),
    {
      name: "stats-storage",
    }
  )
);
