import React from "react";
import "./Stats.scss";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import dailyIcon from "@/assets/daily-calendar-svgrepo-com.svg";


// 2 из 10 - компонент стандартный размер, если цель выполнена цифра текущего количества станоится больше
// сам квадратик становится больше
// в планах нотификейшн и смена цвета
export const Stats = () => {
  return (
    <div className="content">
      <div className="control-panel">
        <SettingsGroup
          legend="Дневная статистика"
          icon={dailyIcon}
        >

        </SettingsGroup>
      </div>
    </div>
  );
};
