import React, { useEffect, useState } from "react";

const App = () => {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const [trackIndex, setTrackIndex] = useState([]);
  const [isRemoving, setIsRemoving] = useState(false);

  const totalActiveCells = config.flat().filter((v) => v === 1).length;
  const isAllCellActivated = trackIndex.length === totalActiveCells;

  function activateCell(index) {
    if (!trackIndex.includes(index)) {
      setTrackIndex((prev) => [...prev, index]);
    }
  }

  useEffect(() => {
    if (isAllCellActivated) {
      setIsRemoving(true);
      console.log("atsrt");
    }
  }, [isAllCellActivated]);

  useEffect(() => {
    if (isRemoving && trackIndex.length > 0) {
      const timer = setTimeout(() => {
        setTrackIndex((prev) => prev.slice(0, -1));
      }, 300);

      return () => clearTimeout(timer);
    }

    if (isRemoving && trackIndex.length === 0) {
      setIsRemoving(false);
    }
  }, [isRemoving, trackIndex]);

  return (
    <div>
      <div className="main">
        {config.flat().map((val, i) => {
          return val === 1 ? (
            <button
              className={trackIndex.includes(i) ? "active-cell" : ""}
              key={i}
              onClick={() => activateCell(i)}
            />
          ) : (
            <span key={i}></span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
