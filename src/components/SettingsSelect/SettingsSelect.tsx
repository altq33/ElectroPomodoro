import React from "react";
import "./SettingsSelect.scss";
import { ISettingsSelectProps } from "@/types/props";
import Select from "react-select";

export const SettingsSelect: React.FC<ISettingsSelectProps> = ({ label }) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <label className="select-label">
      {label}
      <Select
        options={options}
        isSearchable={false}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#8265a7" : "#fff",
            boxShadow: "none",
            ":hover": {
              boxShadow: "none",
              borderColor: state.isFocused ? "#8265a7" : "#fff",
            },
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            width: "70%",
            fontSize: "1.3rem",
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
          dropdownIndicator: (baseStyles, state) => ({
            ...baseStyles,
            color: "#8265a7",
            opacity: 1,
            ":hover": {
              color: "#8265a7",
              opacity: 1,
            },
          }),
          menuList: (baseStyles, state) => ({
            ...baseStyles,
            padding: 0,
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#8265a7",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            borderBottom: "1px solid black",
            background: state.isFocused || state.isSelected ? "#44318d" : "",
            ":hover": {},
            ":last-child": {
              border: "none",
            },
          }),
        }}
      />
    </label>
  );
};
