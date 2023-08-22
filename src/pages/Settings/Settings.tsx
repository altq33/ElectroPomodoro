import React, { useState } from "react";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";
import { SettingsRange } from "@/components/SettingsRange/SettingsRange";
import Switch from "react-switch";
import { NumberPicker } from "@/components/NumberPicker/NumberPicker";
import { SettingsSwitch } from "@/components/SettingsSwitch/SettingsSwitch";
import { SettingsSelect } from "@/components/SettingsSelect/SettingsSelect";

export const Settings = () => {
  const [workTime, setWorkTime] = useState(40);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
  const [isAutoStartWork, setIsAutoStartWork] = useState(false);
  const [isAutoStartBreak, setIsAutoStartBreak] = useState(false);
  const [isAutoStartRest, setIsAutoStartRest] = useState(false);
  const [workPomoCount, setWorkPomoCount] = useState(3);

  return (
    <div className="content">
      <div className="control-panel">
        <form className="settings-form" action="">
          <SettingsGroup legend="Интервалы">
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
          <SettingsGroup legend="Автопереходы">
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
          <SettingsGroup legend="Звуки">
            <SettingsSelect label="Пора работать" />
            <SettingsSelect label="Время перерыва" />
            <SettingsSelect label="Отдохни дружище" />
          </SettingsGroup>
        </form>
      </div>
    </div>
  );
};
