import React, { useState } from "react";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";
import { SettingsRange } from "@/components/SettingsRange/SettingsRange";
import Switch from "react-switch";


export const Settings = () => {
  const [workTime, setWorkTime] = useState(40);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
  const [isAutoStartWork, setIsAutoStartWork] = useState(false);
  const [isAutoStartBreak, setIsAutoStartBreak] = useState(false);
  const [isAutoStartRest, setIsAutoStartRest] = useState(false);

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
            </label>
          </SettingsGroup>
          <SettingsGroup legend="Автопереходы">
            <label className="switch-label" htmlFor="">
              <Switch
                onChange={setIsAutoStartWork}
                checked={isAutoStartWork}
                offColor="#9b9b9b"
                onColor="#8265a7"
                activeBoxShadow=""
                uncheckedIcon={false}
              />
              Автостарт перерыва
            </label>
            <label className="switch-label" htmlFor="">
              <Switch
                onChange={setIsAutoStartBreak}
                checked={isAutoStartBreak}
                offColor="#9b9b9b"
                onColor="#8265a7"
                activeBoxShadow=""
                uncheckedIcon={false}
              />
              Автостарт отдыха
            </label>
            <label className="switch-label" htmlFor="">
              <Switch
                onChange={setIsAutoStartRest}
                checked={isAutoStartRest}
                offColor="#9b9b9b"
                onColor="#8265a7"
                activeBoxShadow=""
                uncheckedIcon={false}
              />
              Автостарт работы
            </label>
          </SettingsGroup>
        </form>
      </div>
    </div>
  );
};
