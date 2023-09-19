import React from "react";
import "./Clock.scss";
import { IClockProps } from "@/types/props";

export const Clock: React.FC<IClockProps> = ({ value }) => {
  return (
    <div className="clock">
      <div className="clock-value">{value.toFixed(1)}</div>
      <div className="twelve"></div>
      <div className="three"></div>
      <div className="six"></div>
      <div className="nine"></div>
      <div className="center"></div>
      <div className="hour"></div>
      <div className="minute"></div>
      <div className="second"></div>
    </div>
  );
};
