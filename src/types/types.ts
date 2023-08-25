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

export interface ISettingsContextValue {
  settings: ISettings;
  setSettings: ((value: ISettings) => void) | null;
}
