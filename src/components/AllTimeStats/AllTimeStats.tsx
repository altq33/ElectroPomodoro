import React from "react";
import "./AllTimeStats.scss";
import { IAllTimeStatsProps } from "@/types/props";
import { Flame } from "../Flame/Flame";
import { Clock } from "../Clock/Clock";
import { Calendar } from "../Calendar/Calendar";

export const AllTimeStats: React.FC<IAllTimeStatsProps> = ({
  streak,
  totalHours,
  totalPomos,
  workDays,
}) => {
  // TODO: Создать компонент большой плитки вместо маленьких
  return (
    <div className="all-time-progress-container">
      <div className="total-stat-element">
        Часов за работой:
        <span className="circle">
          <Clock value={totalHours} />
        </span>
      </div>
      <div className="total-stat-element">
        Дней за работой:
        <span className="circle">
          <Calendar value={workDays} />
        </span>
      </div>
      <div className="total-stat-element">
        Дней подряд:
        <span className="circle">
          <Flame value={streak} />
        </span>
      </div>
      <div className="total-stat-element">
        Выручка за помидоры
        <span className="circle bg-tomato">{totalPomos / 2}$</span>
      </div>
    </div>
  );
};
