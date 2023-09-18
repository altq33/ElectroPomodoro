import "./Timer.scss";
import { SelectStateButton } from "@/components/SelectStateButton/SelectStateButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TimerControlButton } from "@/components/TimerControlButton/TimerControlButton";
import pauseIcon from "@/assets/pause-circle-svgrepo-com.svg";
import startIcon from "@/assets/play-circle-svgrepo-com.svg";
import nextIcon from "@/assets/next-svgrepo-com.svg";
import { PomosCompletedDisplay } from "@/components/PomosCompletedDisplay/PomosCompletedDisplay";
import { PomoStage } from "@/types/types";
import { normalizeTime } from "@/utils/utils";
import { useTimerLogic } from "@/hooks/useTimerLogic";

export const Timer = () => {
  const {
    timer,
    settings,
    getTotalSeconds,
    onPlay,
    onPause,
    setWorkStage,
    setBreakStage,
    setRestStage,
    nextStage,
  } = useTimerLogic();

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
            value={timer.secondsLeft!!}
            maxValue={getTotalSeconds(timer, settings)}
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
              pathColor: `#482774`,
              textColor: "#f4f3f4",
              trailColor: "rgba(255, 255, 255, 0.8)",
            })}
            counterClockwise
          />
        </div>
        <div className="timer-controllers">
          {timer.isPaused ? (
            <TimerControlButton icon={startIcon} onClick={onPlay} />
          ) : (
            <TimerControlButton icon={pauseIcon} onClick={onPause} />
          )}
          <TimerControlButton icon={nextIcon} onClick={nextStage} />
        </div>
      </div>
      <PomosCompletedDisplay
        count={settings.workPomoCount}
        completed={timer.completedPomosCount}
        isWorking={timer.stage == PomoStage.work && !timer.isPaused}
      />
    </div>
  );
};
