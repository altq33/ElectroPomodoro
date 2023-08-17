import React from "react";
import "./Timer.scss";
import { SelectStateButton } from "@/components/SelectStateButton/SelectStateButton";

export const Timer = () => {
  return (
    <div className="content">
      <div className="control-panel">
        <div className="state-buttons-container">
          <SelectStateButton title="Работа" />
          <SelectStateButton title="Перерыв" />
          <SelectStateButton title="Отдых" />
        </div>
      </div>
    </div>
  );
};
