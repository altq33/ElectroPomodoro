import { useSettings } from "@/stores/settings";
import { useTimer } from "@/stores/timer";
import {
  ISettingsActions,
  ISettingsStore,
  ITimerActions,
  ITimerStore,
  PomoStage,
} from "@/types/types";
import react, { useEffect, MouseEvent } from "react";

export const useTimerLogic = () => {
  const settings = useSettings((state) => state);
  const timer = useTimer((state) => state);

  const getTotalSeconds = (
    timer: ITimerStore & ITimerActions,
    settings: ISettingsStore & ISettingsActions
  ) => {
    switch (timer.stage) {
      case PomoStage.work:
        return settings.workTime * 60;
      case PomoStage.rest:
        return settings.restTime * 60;
      case PomoStage.break:
        return settings.breakTime * 60;
    }
  };

  const onPlay = (e: MouseEvent<HTMLButtonElement>) => {
    timer.startTimer();
  };

  const onPause = (e: MouseEvent<HTMLButtonElement>) => {
    timer.pauseTimer();
  };

  const setWorkStage = () => {
    timer.setMode(settings, PomoStage.work);
  };

  const setBreakStage = () => {
    timer.setMode(settings, PomoStage.break);
  };

  const setRestStage = () => {
    timer.setMode(settings, PomoStage.rest);
  };

  const nextStage = () => {
    timer.switchMode(settings, true);
  };

  useEffect(() => {
    if (!timer.isPaused) {
      timer.startTimer();
    }
  }, []);

  return {
    timer,
    settings,
    getTotalSeconds,
    onPlay,
    onPause,
    setWorkStage,
    setBreakStage,
    setRestStage,
    nextStage,
  };
};
