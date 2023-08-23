import React, { useState } from "react";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";
import { SettingsRange } from "@/components/SettingsRange/SettingsRange";
import { NumberPicker } from "@/components/NumberPicker/NumberPicker";
import { SettingsSwitch } from "@/components/SettingsSwitch/SettingsSwitch";
import { SettingsSelect } from "@/components/SettingsSelect/SettingsSelect";
import { ISoundOptions } from "@/types/types";
import intervalsIcon from "../../assets/clock-lines-svgrepo-com.svg";
import transitionIcon from "../../assets/transition-node-svgrepo-com.svg";
import soundIcon from "../../assets/music-svgrepo-com.svg";

export const Settings = () => {
  const [workTime, setWorkTime] = useState(40);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
  const [isAutoStartWork, setIsAutoStartWork] = useState(false);
  const [isAutoStartBreak, setIsAutoStartBreak] = useState(false);
  const [isAutoStartRest, setIsAutoStartRest] = useState(false);
  const [workPomoCount, setWorkPomoCount] = useState(3);
  const [workTimeSound, setWorkTimeSound] = useState<ISoundOptions>({
    value: null,
    label: "Без звука",
  });
  const [breakTimeSound, setBreakTimeSound] = useState<ISoundOptions>({
    value: null,
    label: "Без звука",
  });
  const [restTimeSound, setRestTimeSound] = useState<ISoundOptions>({
    value: null,
    label: "Без звука",
  });
  const [volume, setVolume] = useState(0.5);

  return (
    <div className="content">
      <div className="control-panel">
        <form className="settings-form" action="">
          <SettingsGroup legend="Интервалы" icon={intervalsIcon}>
            <SettingsRange
              label="Рабочее время / мин"
              value={workTime}
              onChange={setWorkTime}
            />
            <SettingsRange
              label="Перерыв / мин"
              value={breakTime}
              onChange={setBreakTime}
            />
            <SettingsRange
              label="Отдых / мин"
              value={restTime}
              onChange={setRestTime}
            />
            <label className="range-label" htmlFor="">
              Количество помидор до отдыха
              <NumberPicker
                style={{ marginTop: "20px" }}
                value={workPomoCount}
                onChange={setWorkPomoCount}
                min={1}
                max={15}
                readOnly
              />
            </label>
          </SettingsGroup>
          <SettingsGroup legend="Автопереходы" icon={transitionIcon}>
            <SettingsSwitch
              label="Автостарт работы"
              value={isAutoStartWork}
              onChange={setIsAutoStartWork}
            />
            <SettingsSwitch
              label="Автостарт перерыва"
              value={isAutoStartBreak}
              onChange={setIsAutoStartBreak}
            />
            <SettingsSwitch
              label="Автостарт отдыха"
              value={isAutoStartRest}
              onChange={setIsAutoStartRest}
            />
          </SettingsGroup>
          <SettingsGroup legend="Звуки" icon={soundIcon}>
            <SettingsSelect
              label="Пора работать"
              menuPlacement="bottom"
              onChange={setWorkTimeSound}
              value={workTimeSound}
            />
            <SettingsSelect
              label="Время перерыва"
              menuPlacement="top"
              onChange={setBreakTimeSound}
              value={breakTimeSound}
            />
            <SettingsSelect
              label="Отдохни дружище"
              menuPlacement="top"
              onChange={setRestTimeSound}
              value={restTimeSound}
            />
            <SettingsRange
              label="Громкость"
              value={volume}
              onChange={setVolume}
              min={0.01}
              max={1}
              step={0.01}
              renderValue={(value) => Math.round(value * 100)}
            />
          </SettingsGroup>
        </form>
      </div>
    </div>
  );
};
