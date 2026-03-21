import React, { useState } from "react";
import questions from "./questions.json";

const App = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleBtn(ques, ans) {
    setAnswers((prev) => [...prev, { question: ques, answer: ans }]);
    setCurrIndex((prev) => prev + 1);
  }

  function handleReset() {
    setAnswers([]);
    setCurrIndex(0);
  }

  return (
    <div>
      {currIndex === questions.length ? (
        <>
          <div>
            {answers.map((val, index) => (
              <div key={index}>
                <h3>{val.question}</h3>

                <p>{val.answer ? "Correct" : "Wrong!"}</p>
              </div>
            ))}

            <button onClick={() => handleReset()}>Restart</button>
          </div>
        </>
      ) : (
        <div>
          <h1>{questions[currIndex]?.question}</h1>

          <div>
            {questions[currIndex]?.options.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  handleBtn(questions[currIndex].question, item.isCorrect)
                }
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
