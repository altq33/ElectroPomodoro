import React, { useLayoutEffect } from "react";
import "./Stats.scss";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import dailyIcon from "@/assets/daily-calendar-svgrepo-com.svg";
import allTimeIcon from "@/assets/time-forward-svgrepo-com.svg";
import { DailyProgress } from "../../components/DailyProgress/DailyProgress";
import { useStats } from "@/stores/stats";
import { useSettings } from "@/stores/settings";
import { AllTimeStats } from "@/components/AllTimeStats/AllTimeStats";

export const Stats = () => {
  const stats = useStats((state) => state);
  const pomoGoal = useSettings((state) => state.pomoGoal);

  useLayoutEffect(() => {
    if (stats.currentDate !== new Date().toDateString()) {
      stats.resetDailyStats();
    }
  }, []);

  return (
    <div className="content">
      <div className="control-panel">
        <SettingsGroup legend="Дневная статистика" icon={dailyIcon}>
          <DailyProgress
            goal={pomoGoal}
            current={stats.todayPomo}
            hoursRest={stats.todaySecondsRest / 3600}
            hoursWork={stats.todaySecondsWork / 3600}
          />
        </SettingsGroup>
        <SettingsGroup legend="Всё время" icon={allTimeIcon}>
          <AllTimeStats
            totalHours={stats.totalWorkSeconds / 3600}
            workDays={stats.totalWorkDays}
            streak={stats.streak}
            totalPomos={stats.totalPomos}
          />
        </SettingsGroup>
      </div>
    </div>
  );
};
