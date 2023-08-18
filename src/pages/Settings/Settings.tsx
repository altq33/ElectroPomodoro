import React, { useState } from "react";
import { Range } from "react-range";
import { SettingsGroup } from "@/components/SettingsGroup/SettingsGroup";
import "./Settings.scss";

export const Settings = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="content">
      <div className="control-panel">
        <form className="settings-form" action="">
          <SettingsGroup legend="Интервалы">
            <label htmlFor="">
              Рабочее время / мин
              <Range
                step={1}
                values={[value]}
                onChange={(values) => {
                  setValue(values[0]);
                }}
                min={1}
                max={100}
                renderTrack={({ props, children }) => (
                  <div {...props} className="range-track">
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="range-thumb">
                    {value}
                  </div>
                )}
              />
            </label>
            <label htmlFor="">
              Перерыв / мин
              <Range
                step={1}
                values={[value]}
                onChange={(values) => {
                  setValue(values[0]);
                }}
                min={1}
                max={100}
                renderTrack={({ props, children }) => (
                  <div {...props} className="range-track">
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="range-thumb">
                    {value}
                  </div>
                )}
              />
            </label>
            <label htmlFor="">
              Отдых / мин
              <Range
                step={1}
                values={[value]}
                onChange={(values) => {
                  setValue(values[0]);
                }}
                min={1}
                max={100}
                renderTrack={({ props, children }) => (
                  <div {...props} className="range-track">
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div {...props} className="range-thumb">
                    {value}
                  </div>
                )}
              />
            </label>
          </SettingsGroup>
        </form>
      </div>
    </div>
  );
  // Не забыть про fieldset и другую сематику формы
  // TODO: Сделать полноценный компонент формы + филдсетов и самих инпутов с лейблами
};
