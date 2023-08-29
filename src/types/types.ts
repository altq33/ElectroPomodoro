export interface ISoundOptions {
  value: null | HTMLAudioElement;
  label: string;
}

export interface ISettingsStore {
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
  setSettings: (state: ISettingsStore) => void;
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

export enum PomoStage {
  work = "WORK",
  break = "BREAK",
  rest = "REST",
}

export interface ITimerStore {
  isPaused: boolean;
  stage: PomoStage;
  secondsLeft: number | null;
  completedPomosCount: number;
}

export interface ITimerActions {
  setIsPaused: (value: boolean) => void;
  setStage: (value: PomoStage) => void;
  setSecondsLeft: (value: number) => void;
  setCompletedPomosCount: (value: number) => void;
  decrementSecondsLeft: () => void;
  switchMode: (settings: ISettingsStore & ISettingsActions) => void;
  setMode: (
    settings: ISettingsStore & ISettingsActions,
    stage: PomoStage
  ) => void;
}
