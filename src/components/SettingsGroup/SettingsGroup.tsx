import React, { useState } from "react";
import "./SettingsGroup.scss";
import { ISettingsGroupProps } from "../../types/props";

export const SettingsGroup: React.FC<ISettingsGroupProps> = React.memo(
  ({ legend, children, icon, iconAlt }) => {
    return (
      <fieldset>
        <div className="fieldset-group">
          <div className="legend-group">
            <legend>{legend}</legend>
            <img className="icon" src={icon} alt={iconAlt} />
          </div>
          {children}
        </div>
      </fieldset>
    );
  }
);
