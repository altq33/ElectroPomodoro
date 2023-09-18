import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";
import { SettingsRange } from "@/components/SettingsRange/SettingsRange";
import { NumberPicker } from "@/components/NumberPicker/NumberPicker";
import { SettingsSwitch } from "@/components/SettingsSwitch/SettingsSwitch";
import { SettingsSelect } from "@/components/SettingsSelect/SettingsSelect";
import intervalsIcon from "../../assets/clock-lines-svgrepo-com.svg";
import transitionIcon from "../../assets/transition-node-svgrepo-com.svg";
import soundIcon from "../../assets/music-svgrepo-com.svg";
import { numberPickerMargin } from "@/resources/styles";
import { calculateRenderVolumeValue } from "@/utils/utils";
import { useSettingsLogic } from "@/hooks/useSettingsLogic";

export const Settings = () => {
  const { settings, onChangeBreakTime, onChangeWorkTime, onChangeRestTime } =
    useSettingsLogic();

  return (
    <div className="content">
      <div className="control-panel">
        <form className="settings-form" action="">
          <SettingsGroup legend="Интервалы" icon={intervalsIcon} isFormPart>
            <SettingsRange
              label="Рабочее время / мин"
              value={settings.workTime}
              onChange={onChangeWorkTime}
            />
            <SettingsRange
              label="Перерыв / мин"
              value={settings.breakTime}
              onChange={onChangeBreakTime}
            />
            <SettingsRange
              label="Отдых / мин"
              value={settings.restTime}
              onChange={onChangeRestTime}
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
            <label className="range-label" htmlFor="">
              Цель / Помидор в день
              <NumberPicker
                style={numberPickerMargin}
                value={settings.pomoGoal}
                onChange={settings.setPomoGoal}
                min={1}
                max={100}
                readOnly
              />
            </label>
          </SettingsGroup>
          <SettingsGroup legend="Автопереходы" icon={transitionIcon} isFormPart>
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
          <SettingsGroup legend="Звуки" icon={soundIcon} isFormPart>
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
