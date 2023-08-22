import React from "react";
import "./NumberPicker.scss";
import { INumberPickerProps } from "@/types/props";

export const NumberPicker: React.FC<INumberPickerProps> = ({
  value,
  onChange,
  style,
  max,
  min,
  readOnly,
  ...props
}) => {
  const increment = () => {
    if (max && value + 1 > max) return;
    onChange(value + 1);
  };

  const decrement = () => {
    if (min && value - 1 < min) return;
    onChange(value - 1);
  };

  return (
    <div className="number-input-container" style={style}>
      <input
        className="number-input"
        value={value}
        readOnly={readOnly}
        {...props}
      />
      <div className="buttons-container">
        <button
          className="change-value-button"
          type="button"
          onClick={increment}
        >
          +
        </button>
        <button
          className="change-value-button"
          type="button"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};
