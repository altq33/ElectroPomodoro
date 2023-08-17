import React from "react";
import "./SelectStateButton.scss";

export const SelectStateButton: React.FC<ISelectStateButtonProps> = ({
  title,
}) => {
  return <button className="select-state-btn">{title}</button>;
};
