import React, { useState } from "react";

const steps = [
  { title: "Login", component: "<Login /> " },
  { title: "Shipping", component: "<Shipping /> " },
  { title: "Payment", component: "<Payment />" },
  { title: "Success", component: "<Success />" },
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  function handlePrev() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  function handleNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }

  return (
    <div>
      <div>
        <div style={{ display: "flex", gap: "20px" }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: index <= currentStep ? "lime" : "lightgray",
                padding: "8px",
                borderRadius: "10px",
                color: "#000",
              }}
            >
              {step.title}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "30px" }}>{steps[currentStep].component}</div>

        <div style={{ marginTop: "20px" }}>
          <button onClick={handlePrev}>Prev</button>

          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;
