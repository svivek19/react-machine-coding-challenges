import { useState } from "react";
import data from "./data.json";

function App() {
  const [activeId, setActiveId] = useState(null);
  const [toggle, setToggle] = useState(false);

  function handleToggle(id) {
    setToggle(!toggle);
    setActiveId(id);
  }

  return (
    <>
      <div className="main">
        {data.map((val, i) => (
          <div key={i} className="container">
            <div className="card">
              <h2>{val.title}</h2>
              <button onClick={() => handleToggle(val.id)}>
                {!toggle ? "open" : "close"}
              </button>
            </div>
            <div>{toggle && val.id === activeId && <p>{val.content}</p>}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
