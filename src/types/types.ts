export interface ISoundOptions {
  value: null | HTMLAudioElement;
  label: string;
}
export interface ISettings {
  workTime: number;
  breakTime: number;
  restTime: number;
  workPomoCount: number;
  isAutoStartWork: boolean;
  isAutoStartBreak: boolean;
  isAutoStartRest: boolean;
  breakTimeSound: ISoundOptions;
  workTimeSound: ISoundOptions;
  restTimeSound: ISoundOptions;
  volume: number;
}

export interface ISettingsActions {
  setSettings: (state: ISettings) => void;
  setWorkTime: (value: number) => void;
  setBreakTime: (value: number) => void;
  setRestTime: (value: number) => void;
  setWorkPomoCount: (value: number) => void;
  setIsAutoStartWork: (value: boolean) => void;
  setIsAutoStartBreak: (value: boolean) => void;
  setIsAutoStartRest: (value: boolean) => void;
  setBreakTimeSound: (value: ISoundOptions) => void;
  setWorkTimeSound: (value: ISoundOptions) => void;
  setRestTimeSound: (value: ISoundOptions) => void;
  setVolume: (value: number) => void;
}
