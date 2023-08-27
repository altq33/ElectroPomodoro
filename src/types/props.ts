import { ReactNode } from "react";
import { ISoundOptions } from "./types";

export interface ISelectStateButtonProps {
  title: string;
  isActive: boolean;
}

export interface ITimerControlButtonProps {
  icon: string;
  alt?: string;
}

export interface IPomosCompletedDisplayProps {
  count: number;
  completed: number;
  isWorking: boolean;
}

export interface IPomoProps {
  isCompleted?: boolean;
  isCurrent?: boolean;
}

export interface ISettingsGroupProps {
  legend: string;
  icon: string;
  iconAlt?: string;
  children: ReactNode;
}

export interface ISettingsRangeProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  renderValue?: (value: number) => number | string;
}

export interface ISettingsSwitchProps {
  onChange: (value: boolean) => void;
  value: boolean;
  label: string;
}

export interface INumberPickerProps {
  value: number;
  onChange: (value: number) => void;
  style?: React.CSSProperties;
  max?: number;
  min?: number;
  readOnly?: boolean;
}

export interface ISettingsSelectProps {
  label: string;
  menuPlacement: "bottom" | "auto" | "top";
  value: ISoundOptions;
  onChange: (value: ISoundOptions) => void;
}
