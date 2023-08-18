import React from "react";
import "./TimerControlButton.scss";
import { ITimerControlButtonProps } from "@/types/props";

export const TimerControlButton: React.FC<ITimerControlButtonProps> = ({
  icon,
  alt
}) => {
  return (
    <button className="timer-control-btn">
      <img src={icon} alt={alt} />
    </button>
  );
};
