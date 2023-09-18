import { useSettings } from "@/stores/settings";
import { useTimer } from "@/stores/timer";
import { PomoStage } from "@/types/types";
import { useCallback, useEffect } from "react";

export const useSettingsLogic = () => {
  const settings = useSettings((state) => state);
  const timer = useTimer((state) => state);

  const onChangeWorkTime = useCallback((value: number) => {
    settings.setWorkTime(value);
    if (timer.stage == PomoStage.work) {
      timer.pauseTimer();
      timer.setSecondsLeft(value * 60);
    }
  }, []);

  const onChangeBreakTime = useCallback((value: number) => {
    settings.setBreakTime(value);
    if (timer.stage == PomoStage.break) {
      timer.pauseTimer();
      timer.setSecondsLeft(value * 60);
    }
  }, []);

  const onChangeRestTime = useCallback((value: number) => {
    settings.setRestTime(value);
    if (timer.stage == PomoStage.rest) {
      timer.pauseTimer();
      timer.setSecondsLeft(value * 60);
    }
  }, []);

  return {
    settings,
    onChangeBreakTime,
    onChangeWorkTime,
    onChangeRestTime,
  };
};
