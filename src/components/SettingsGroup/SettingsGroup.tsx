import React, { useState } from "react";
import "./SettingsGroup.scss";
import { ISettingsGroupProps } from "../../types/props";

export const SettingsGroup: React.FC<ISettingsGroupProps> = React.memo(
  ({ legend, children, icon, iconAlt, isFormPart = false }) => {
    if (isFormPart) {
      return (
        <fieldset className="fieldset">
          <div className="fieldset-group">
            <div className="legend-group">
              <legend className="legend">{legend}</legend>
              <img className="icon" src={icon} alt={iconAlt} />
            </div>
            {children}
          </div>
        </fieldset>
      );
    }

    return (
      <section className="fieldset">
        <div className="fieldset-group">
          <div className="legend-group">
            <h2 className="legend">{legend}</h2>
            <img className="icon" src={icon} alt={iconAlt} />
          </div>
          {children}
        </div>
      </section>
    );
  }
);
