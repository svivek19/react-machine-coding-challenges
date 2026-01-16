import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setCount(0);
  }

  return (
    <div>
      <h1>Timer</h1>

      <h2>{count}</h2>
      {!isRunning && (
        <button onClick={start}>
          {!isRunning && count !== 0 ? "Continue" : "Start"}
        </button>
      )}
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
