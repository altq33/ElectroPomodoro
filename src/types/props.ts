import { ReactNode } from "react";

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
}

export interface IPomoProps {
  isCompleted?: boolean;
  isCurrent?: boolean;
}

export interface ISettingsGroupProps {
  legend: string;
  children: ReactNode;
}
