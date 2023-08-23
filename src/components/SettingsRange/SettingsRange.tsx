import React from "react";
import "./SettingsRange.scss";
import { Range } from "react-range";
import { ISettingsRangeProps } from "@/types/props";

export const SettingsRange: React.FC<ISettingsRangeProps> = ({
  label,
  value,
  onChange,
  min = 1,
  max = 100,
  step = 1,
  renderValue = (value) => value,
}) => {
  return (
    <label className="range-label" htmlFor="">
      {label}
      <Range
        step={step}
        values={[value]}
        onChange={(values) => {
          onChange(values[0]);
        }}
        min={min}
        max={max}
        renderTrack={({ props, children }) => (
          <div {...props} className="range-track">
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div {...props} className="range-thumb">
            {renderValue(value)}
          </div>
        )}
      />
    </label>
  );
};
