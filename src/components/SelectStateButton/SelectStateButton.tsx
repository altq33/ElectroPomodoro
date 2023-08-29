import React from "react";
import "./SelectStateButton.scss";
import classNames from "classnames";
import { ISelectStateButtonProps } from "@/types/props";

export const SelectStateButton: React.FC<ISelectStateButtonProps> = ({
  title,
  isActive,
  onClick,
}) => {
  return (
    <button
      className={classNames({
        "select-state-btn": true,
        active: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
