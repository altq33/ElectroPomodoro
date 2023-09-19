import React from "react";
import "./Calendar.scss";
import { ICalendarProps } from "@/types/props";

export const Calendar: React.FC<ICalendarProps> = ({ value }) => {
  return (
    <div className="date">
      <span className="binds"></span>
      <span className="month">Days</span>
      <h2 className="day">{value}</h2>
    </div>
  );
};
