import React from "react";
import "./TimerControlButton.scss";
import { ITimerControlButtonProps } from "@/types/props";

export const TimerControlButton: React.FC<ITimerControlButtonProps> = ({
  icon,
  alt,
  onClick,
}) => {
  return (
    <button className="timer-control-btn" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};
