import React from "react";
import "./PomosCompletedDisplay.scss";
import { Pomo } from "../Pomo/Pomo";
import { IPomosCompletedDisplayProps } from "@/types/props";

export const PomosCompletedDisplay: React.FC<IPomosCompletedDisplayProps> = ({
  count,
  completed,
}) => {
  const pomosToRender = Array(count).fill(undefined);

  return (
    <div className="pomos-container">
      {pomosToRender.map((_, index) => {
        if (index != count && index == completed) {
          return <Pomo key={index} isCurrent />;
        }
        return index < completed ? (
          <Pomo key={index} isCompleted />
        ) : (
          <Pomo key={index} />
        );
      })}
    </div>
  );
};
