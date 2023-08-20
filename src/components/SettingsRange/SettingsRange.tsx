import React from "react";
import "./SettingsRange.scss";
import { Range } from "react-range";
import { ISettingsRangeProps } from "@/types/props";

export const SettingsRange: React.FC<ISettingsRangeProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <label className="range-label" htmlFor="">
      {label}
      <Range
        step={1}
        values={[value]}
        onChange={(values) => {
          onChange(values[0]);
        }}
        min={1}
        max={100}
        renderTrack={({ props, children }) => (
          <div {...props} className="range-track">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="range-thumb">
            {value}
          </div>
        )}
      />
    </label>
  );
};
