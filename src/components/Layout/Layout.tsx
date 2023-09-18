import React, { createContext, useLayoutEffect, useState } from "react";
import { Link, Outlet, useHref, useLocation } from "react-router-dom";
import "./Layout.scss";
import logoIcon from "../../assets/main-logo.svg";
import { PomoStage } from "@/types/types";
import { useTimer } from "@/stores/timer";

export const Layout = () => {
  const location = useLocation();
  const timer = useTimer((state) => state);
  const locationAllias: {
    [key: string]: string;
  } = {
    settings: "Настройки",
    stats: "Статистика",
  };

  useLayoutEffect(() => {
    if (timer.stage == PomoStage.work) {
      document.documentElement.dataset.theme = "work";
    } else if (timer.stage == PomoStage.break) {
      document.documentElement.dataset.theme = "break";
    } else {
      document.documentElement.dataset.theme = "rest";
    }
  }, []);

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
          <Outlet />
        </div>
      </main>
    </div>
  );
};
