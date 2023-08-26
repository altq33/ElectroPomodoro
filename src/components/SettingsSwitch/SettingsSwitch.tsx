import React from "react";
import "./SettingsSwitch.scss";
import { ISettingsSwitchProps } from "@/types/props";
import Switch from "react-switch";

export const SettingsSwitch: React.FC<ISettingsSwitchProps> = React.memo(
  ({ onChange, value, label }) => {
    return (
      <label className="switch-label" htmlFor="">
        <Switch
          onChange={onChange}
          checked={value}
          offColor="#9b9b9b"
          onColor="#8265a7"
          activeBoxShadow="0 0 2px 3px #000"
          uncheckedIcon={false}
        />
        {label}
      </label>
    );
  }
);
