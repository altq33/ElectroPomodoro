export interface ISoundOptions {
  value: null | string;
  label: string;
}

export interface ISettingsStore {
  workTime: number;
  breakTime: number;
  restTime: number;
  pomoGoal: number;
  workPomoCount: number;
  options: ISoundOptions[];
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
  setPomoGoal: (value: number) => void;
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
  currentTimerId: ReturnType<typeof setInterval> | null;
}

export interface ITimerActions {
  setIsPaused: (value: boolean) => void;
  setStage: (value: PomoStage) => void;
  setSecondsLeft: (value: number) => void;
  setCompletedPomosCount: (value: number) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  decrementSecondsLeft: () => void;
  switchMode: (
    settings: ISettingsStore & ISettingsActions,
    isManualSwitch?: boolean
  ) => void;
  setMode: (
    settings: ISettingsStore & ISettingsActions,
    stage: PomoStage
  ) => void;
}

export interface IStatsStore {
  todayPomo: number;
  todaySecondsWork: number;
  todaySecondsRest: number;
  currentDate: string;
  prevDate: string;
  totalWorkSeconds: number;
  isWorkingToday: boolean;
  totalWorkDays: number;
  streak: number;
  totalPomos: number;
}

export interface IStatsActions {
  incrementTodayPomo: () => void;
  setTodaySecondsWork: (value: number) => void;
  setTodaySecondsRest: (value: number) => void;
  incrementTodaySecondsWork: () => void;
  incrementTodaySecondsRest: () => void;
  setCurrentDay: (value: string) => void;
  resetDailyStats: () => void;
  incrementStreak: () => void;
  resetStreak: () => void;
  incrementTotalWorkDays: () => void;
  setIsWorkingToday: (value: boolean) => void;
}
