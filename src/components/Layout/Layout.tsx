import React, { createContext, useState } from "react";
import { Link, Outlet, useHref, useLocation } from "react-router-dom";
import "./Layout.scss";
import logoIcon from "../../assets/main-logo.svg";
import { ISettings, ISettingsContextValue } from "@/types/types";

export const SettingsContext = createContext<ISettingsContextValue>({
  settings: {
    workTime: 30,
    breakTime: 15,
    restTime: 30,
    workPomoCount: 3,
    isAutoStartWork: false,
    isAutoStartBreak: false,
    isAutoStartRest: false,
    breakTimeSound: {
      value: null,
      label: "Без звука",
    },
    workTimeSound: {
      value: null,
      label: "Без звука",
    },
    restTimeSound: {
      value: null,
      label: "Без звука",
    },
    volume: 0.5,
  },
  setSettings: null,
});

export const Layout = () => {
  const [settings, setSettings] = useState<ISettings>({
    workTime: 30,
    breakTime: 15,
    restTime: 30,
    workPomoCount: 3,
    isAutoStartWork: false,
    isAutoStartBreak: false,
    isAutoStartRest: false,
    breakTimeSound: {
      value: null,
      label: "Без звука",
    },
    workTimeSound: {
      value: null,
      label: "Без звука",
    },
    restTimeSound: {
      value: null,
      label: "Без звука",
    },
    volume: 0.5,
  });

  const location = useLocation();
  const locationAllias: {
    [key: string]: string;
  } = {
    settings: "Настройки",
    stats: "Статистика",
  };

  return (
    <div className="wrapper">
      <header id="header">
        <div className="fixed">
          <div className="header-content">
            <div className="logo-container">
              <Link to="/" className="logo">
                ElectroPomodoro
                <img src={logoIcon} alt="logo icon tomat whith lightning" />
              </Link>
              <h2 className="current-page-name">
                {`${
                  location.pathname.slice(1) &&
                  "/ " + locationAllias[location.pathname.slice(1)]
                }
                `}
              </h2>
            </div>
            <nav className="main-menu">
              <ul className="menu-list">
                <li className="menu-list-item">
                  <Link to="settings">
                    <span>Настройки</span>
                  </Link>
                </li>
                <li className="menu-list-item">
                  <Link to="stats">
                    <span>Статистика</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main id="main">
        <div className="fixed">
          <SettingsContext.Provider value={{ settings, setSettings }}>
            <Outlet />
          </SettingsContext.Provider>
        </div>
      </main>
    </div>
  );
};
