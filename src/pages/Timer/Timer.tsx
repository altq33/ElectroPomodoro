import React, { useContext, useEffect, useRef, MouseEvent } from "react";
import "./Timer.scss";
import { SelectStateButton } from "@/components/SelectStateButton/SelectStateButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TimerControlButton } from "@/components/TimerControlButton/TimerControlButton";
import pauseIcon from "../../assets/pause-circle-svgrepo-com.svg";
import startIcon from "../../assets/play-circle-svgrepo-com.svg";
import prevIcon from "../../assets/prev-svgrepo-com.svg";
import nextIcon from "../../assets/next-svgrepo-com.svg";
import { PomosCompletedDisplay } from "@/components/PomosCompletedDisplay/PomosCompletedDisplay";
import { useSettings } from "@/stores/settings";
import { useTimer } from "@/stores/timer";
import { PomoStage } from "@/types/types";
import { useInterval } from "@/hooks/useInterval";
import { normalizeTime } from "@/utils/utils";

export const Timer = () => {
  const settings = useSettings((state) => state);
  const timer = useTimer((state) => state);

  const getTotalSeconds = () => {
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
    timer.setIsPaused(false);
    console.log(timer);
  };

  const onPause = (e: MouseEvent<HTMLButtonElement>) => {
    timer.setIsPaused(true);
    console.log(timer);
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

  useEffect(() => {
    timer.setSecondsLeft(settings.workTime * 60);
  }, [settings]);

  useInterval(() => {
    if (timer.isPaused) return;
    if (timer.secondsLeft === 0) {
      return timer.switchMode(settings);
    }
    timer.decrementSecondsLeft();
  }, 1000);

  return (
    <div className="content">
      <div className="control-panel">
        <div className="state-buttons-container">
          <SelectStateButton
            title="Работа"
            isActive={timer.stage == PomoStage.work}
            onClick={setWorkStage}
          />
          <SelectStateButton
            title="Перерыв"
            isActive={timer.stage == PomoStage.break}
            onClick={setBreakStage}
          />
          <SelectStateButton
            title="Отдых"
            isActive={timer.stage == PomoStage.rest}
            onClick={setRestStage}
          />
        </div>
        <div className="timer-container">
          <CircularProgressbar
            value={Math.round((timer.secondsLeft!! / getTotalSeconds()) * 100)}
            maxValue={100}
            strokeWidth={5}
            text={normalizeTime(
              Math.floor(timer.secondsLeft!! / 60),
              timer.secondsLeft!! % 60
            )}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "1.5rem",
              rotation: -0.25,
              pathTransitionDuration: 0.5,
              pathColor: `#8265a7`,
              textColor: "#f4f3f4",
              trailColor: "rgba(255, 255, 255, 0.8)",
            })}
            counterClockwise
          />
        </div>
        <div className="timer-controllers">
          <TimerControlButton icon={prevIcon} />
          {timer.isPaused ? (
            <TimerControlButton icon={startIcon} onClick={onPlay} />
          ) : (
            <TimerControlButton icon={pauseIcon} onClick={onPause} />
          )}
          <TimerControlButton icon={nextIcon} />
        </div>
      </div>
      <PomosCompletedDisplay
        count={settings.workPomoCount}
        completed={timer.completedPomosCount}
        isWorking={timer.stage == PomoStage.work}
      />
    </div>
  );
};
