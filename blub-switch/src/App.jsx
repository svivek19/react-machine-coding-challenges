import React, { useState } from "react";
import blubOn from "./assets/blub-on.png";
import blubOff from "./assets/bulb-off.png";

const App = () => {
  const [isBlubOn, setIsBlubOff] = useState(false);

  function handleToggle() {
    setIsBlubOff((prev) => !prev);
  }

  return (
    <div>
      <img
        src={isBlubOn ? blubOn : blubOff}
        alt={isBlubOn ? "Blub on" : "Blub off"}
      />

      <div className="blub-container">
        <label className="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>

      <div>
        <h3>{isBlubOn ? "The Blub is ON" : "The Blub is OFF"}</h3>
      </div>
    </div>
  );
};

export default App;
