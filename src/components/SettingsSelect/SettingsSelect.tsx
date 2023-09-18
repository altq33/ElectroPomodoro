import React, { useRef } from "react";
import "./SettingsSelect.scss";
import { ISettingsSelectProps } from "@/types/props";
import Select from "react-select";
import { CustomSoundOption } from "../CustomSoundOption/CustomSoundOption";
import { ISoundOptions } from "@/types/types";

export const SettingsSelect: React.FC<ISettingsSelectProps> = React.memo(
  ({ label, menuPlacement, value, onChange, options }) => {
    return (
      <label className="select-label">
        {label}
        <Select
          options={options}
          value={value}
          components={{ Option: CustomSoundOption }}
          onChange={(value) => onChange(value as ISoundOptions)}
          isSearchable={false}
          menuPlacement={menuPlacement}
          menuShouldScrollIntoView
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
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "#8265a7",
              opacity: 1,
              ":hover": {
                color: "#8265a7",
                opacity: 1,
              },
            }),
            menuList: (baseStyles) => ({
              ...baseStyles,
              padding: 0,
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              backgroundColor: "#8265a7",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              borderBottom: "1px solid black",
              background: state.isSelected ? "#44318d" : "",
              ":hover": {},
              ":last-child": {
                border: "none",
              },
            }),
          }}
        />
      </label>
    );
  }
);
