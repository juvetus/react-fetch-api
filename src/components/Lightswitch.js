import React, { useContext } from "react";
import { Form } from "semantic-ui-react";

import { DarkModeContext } from "./Square";

function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div className="Lightswitch">
      <Form.Button className={darkMode} onClick={handleClick}>
        Switch Mode
      </Form.Button>
    </div>
  );
}

export default Lightswitch;
