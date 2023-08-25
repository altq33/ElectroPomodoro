import React, { useContext } from "react";
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
import { SettingsContext } from "@/components/Layout/Layout";

export const Timer = () => {
  const { settings, setSettings } = useContext(SettingsContext);

  return (
    <div className="content">
      <div className="control-panel">
        <div className="state-buttons-container">
          <SelectStateButton title="Работа" isActive />
          <SelectStateButton title="Перерыв" isActive={false} />
          <SelectStateButton title="Отдых" isActive={false} />
        </div>
        <div className="timer-container">
          <CircularProgressbar
            value={settings.workTime}
            maxValue={100}
            strokeWidth={5}
            text={`${settings.workTime}`}
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "1.5rem",
              rotation: -0.25,
              pathTransitionDuration: 0.5,
              pathColor: `#8265a7`,
              textColor: "#f4f3f4",
              trailColor: "rgba(255, 255, 255, 0.8)",
            })}
          />
        </div>
        <div className="timer-controllers">
          <TimerControlButton icon={prevIcon} />
          <TimerControlButton icon={pauseIcon} />
          <TimerControlButton icon={startIcon} />
          <TimerControlButton icon={nextIcon} />
        </div>
      </div>
      <PomosCompletedDisplay count={settings.workPomoCount} completed={0} />
    </div>
  );
};
