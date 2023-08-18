import React, { useState } from "react";
import "./SettingsGroup.scss";
import { ISettingsGroupProps } from "../../types/props";

export const SettingsGroup: React.FC<ISettingsGroupProps> = ({
  legend,
  children,
}) => {
  return (
    <fieldset>
      <div className="fieldset-group">
        <legend>{legend}</legend>
        {children}
      </div>
    </fieldset>
  );
};
