import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import { Settings } from "./pages/Settings/Settings";
import { Stats } from "./pages/Stats/Stats";
import { Timer } from "./pages/Timer/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Timer />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
