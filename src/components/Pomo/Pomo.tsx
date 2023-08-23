import React from "react";
import "./Pomo.scss";
import classNames from "classnames";
import { IPomoProps } from "@/types/props";

export const Pomo: React.FC<IPomoProps> = ({ isCompleted, isCurrent }) => {
  return (
    <div
      className={classNames({
        pomo: true,
        current: isCurrent,
        completed: isCompleted,
      })}
    ></div>
  );
};
