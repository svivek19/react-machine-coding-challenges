import React, { useState } from "react";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";

const images = [img1, img2, img3, img4, img5];
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious() {
    setCurrentIndex((prev) => (prev < 1 ? images.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="main">
      <div>
        <button onClick={handlePrevious}>Previous</button>
      </div>
      <div className="img-main">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default App;
