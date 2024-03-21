import React from "react";

const SwitchHandler = ({isDark, changeMode}) => {
  return (
    <div className="form-group">
        <input className="switch-handler" id="toggleMode" aria-label="Toggle Dark Mode" type="checkbox" onChange={changeMode} checked={isDark} />
        <label htmlFor="toggleMode">Dark Mode</label>
    </div>
  );
};

export default SwitchHandler;
