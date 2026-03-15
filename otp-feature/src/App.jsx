import React, { useEffect, useRef, useState } from "react";

const OTP_INPUT_SIZE = 4;

const App = () => {
  const refArr = useRef([]);
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT_SIZE).fill(""));

  function handleChange(value, index) {
    if (isNaN(value)) return;

    const newArr = [...inputArr];
    const newVal = value.trim();
    newArr[index] = newVal.slice(-1);
    setInputArr(newArr);

    newVal && refArr?.current[index + 1]?.focus();
  }

  function handleOnKeyDown(e, index) {
    if (!e.target.value && e.code === "Backspace") {
      refArr?.current[index - 1]?.focus();
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      refArr.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < inputArr.length - 1) {
      e.preventDefault();
      refArr.current[index + 1]?.focus();
    }
  }

  useEffect(() => {
    refArr?.current[0]?.focus();
  }, []);

  return (
    <div>
      <h1>OTP Feature</h1>
      <div className="input-container">
        {inputArr.map((input, index) => (
          <input
            type="text"
            key={index}
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
