import React from "react";
import { Link, Outlet, useHref, useLocation } from "react-router-dom";
import "./Layout.scss";
import { key } from "localforage";

function Layout() {
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
                  <Link to="settings">Настройки</Link>
                </li>
                <li className="menu-list-item">
                  <Link to="stats">Статистика</Link>
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
}

export default Layout;
