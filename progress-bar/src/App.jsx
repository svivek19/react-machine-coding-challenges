import React, { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="main">
      <ProgressBar value={0} />
    </div>
  );
};

export default App;

const ProgressBar = ({ value = 0 }) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        setProgress(Math.min(100, prev + 1));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progress}%`, backgroundColor: "green" }}
      >
        {progress}%
      </div>
    </div>
  );
};
