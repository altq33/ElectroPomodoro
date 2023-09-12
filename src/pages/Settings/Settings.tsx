import React, { useState, useContext, useEffect, useCallback } from "react";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";
import { SettingsRange } from "@/components/SettingsRange/SettingsRange";
import { NumberPicker } from "@/components/NumberPicker/NumberPicker";
import { SettingsSwitch } from "@/components/SettingsSwitch/SettingsSwitch";
import { SettingsSelect } from "@/components/SettingsSelect/SettingsSelect";
import intervalsIcon from "../../assets/clock-lines-svgrepo-com.svg";
import transitionIcon from "../../assets/transition-node-svgrepo-com.svg";
import soundIcon from "../../assets/music-svgrepo-com.svg";
import { useSettings } from "../../stores/settings";
import { numberPickerMargin } from "@/resources/styles";

export const Settings = () => {
  const settings = useSettings((state) => state);
  const calculateRenderVolumeValue = useCallback(
    (value: number) => Math.round(value * 100),
    []
  );
  console.log(settings.options);

  return (
    <div className="content">
      <div className="control-panel">
        <form className="settings-form" action="">
          <SettingsGroup legend="Интервалы" icon={intervalsIcon}>
            <SettingsRange
              label="Рабочее время / мин"
              value={settings.workTime}
              onChange={settings.setWorkTime}
            />
            <SettingsRange
              label="Перерыв / мин"
              value={settings.breakTime}
              onChange={settings.setBreakTime}
            />
            <SettingsRange
              label="Отдых / мин"
              value={settings.restTime}
              onChange={settings.setRestTime}
            />
            <label className="range-label" htmlFor="">
              Количество помидор до отдыха
              <NumberPicker
                style={numberPickerMargin}
                value={settings.workPomoCount}
                onChange={settings.setWorkPomoCount}
                min={1}
                max={15}
                readOnly
              />
            </label>
          </SettingsGroup>
          <SettingsGroup legend="Автопереходы" icon={transitionIcon}>
            <SettingsSwitch
              label="Автостарт работы"
              value={settings.isAutoStartWork}
              onChange={settings.setIsAutoStartWork}
            />
            <SettingsSwitch
              label="Автостарт перерыва"
              value={settings.isAutoStartBreak}
              onChange={settings.setIsAutoStartBreak}
            />
            <SettingsSwitch
              label="Автостарт отдыха"
              value={settings.isAutoStartRest}
              onChange={settings.setIsAutoStartRest}
            />
          </SettingsGroup>
          <SettingsGroup legend="Звуки" icon={soundIcon}>
            <SettingsSelect
              options={settings.options}
              label="Пора работать"
              menuPlacement="bottom"
              onChange={settings.setWorkTimeSound}
              value={settings.workTimeSound}
            />
            <SettingsSelect
              options={settings.options}
              label="Время перерыва"
              menuPlacement="top"
              onChange={settings.setBreakTimeSound}
              value={settings.breakTimeSound}
            />
            <SettingsSelect
              options={settings.options}
              label="Отдохни дружище"
              menuPlacement="top"
              onChange={settings.setRestTimeSound}
              value={settings.restTimeSound}
            />
            <SettingsRange
              label="Громкость / %"
              value={settings.volume}
              onChange={settings.setVolume}
              min={0.01}
              max={1}
              step={0.01}
              onRenderValue={calculateRenderVolumeValue}
            />
          </SettingsGroup>
        </form>
      </div>
    </div>
  );
};
