import React, { useContext } from "react";
import Content from "./Content";
import { DarkModeContext } from "./Square";
import Lightswitch from "./Lightswitch";
import CustomScroll from "react-custom-scroll";

import "./Square.css";

function Container() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkMode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <CustomScroll>
        <Content />

        <Lightswitch />
      </CustomScroll>
    </div>
  );
}

export default Container;
