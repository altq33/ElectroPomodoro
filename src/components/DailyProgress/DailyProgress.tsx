import React from "react";
import "./DailyProgress.scss";
import { IDailyProgressProps } from "@/types/props";
import { Chart } from "react-google-charts";
import { PieChart } from "react-minimal-pie-chart";

export const DailyProgress: React.FC<IDailyProgressProps> = ({
  goal,
  current,
  hoursWork,
  hoursRest,
}) => {
  return (
    <div className="progress-container">
      <div className="stats-number-container">
        <div className="number-stat">
          Цель: <span>{goal}</span>
        </div>
        <div className="number-stat">
          Выполнено: <span>{current}</span>
        </div>
        <div className="number-stat">
          Осталось: <span>{goal >= current ? goal - current : 0}</span>
        </div>
      </div>
      <PieChart
        animate
        animationDuration={700}
        className="pie"
        label={(value) =>
          `${value.dataEntry.key}: ${(value.dataEntry.value - 1).toFixed(2)}ч`
        }
        labelStyle={{ fontSize: "40%", fill: "white" }}
        data={[
          {
            value: hoursWork + 1,
            color: "#482774",
            key: "Работа",
          },
          { value: hoursRest + 1, color: "#166d44", key: "Отдых" },
        ]}
      />
    </div>
  );
};
