import React from "react";
import "./Flame.scss";
import { IFlameProps } from "@/types/props";

export const Flame: React.FC<IFlameProps> = ({ value }) => {
  return (
    <div className="fire">
      <div className="flame-value-container">{value}</div>
      <div className="fire-left">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-center">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-right">
        <div className="main-fire"></div>
        <div className="particle-fire"></div>
      </div>
      <div className="fire-bottom">
        <div className="main-fire"></div>
      </div>
    </div>
  );
};
