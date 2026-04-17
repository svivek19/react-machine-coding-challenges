import React, { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [showRes, setShowRes] = useState(false);
  const [response, setResponse] = useState([]);
  const [cache, setCache] = useState({});

  const getRecipes = async () => {
    if (cache[input]) {
      setResponse(cache[input]);
      console.log("Cache: trigger");
      return;
    }

    console.log("api: trigger");
    const res = await fetch("https://dummyjson.com/recipes/search?q=" + input)
      .then((res) => res.json())
      .then((data) => {
        setResponse(data.recipes);
        setCache((prev) => ({ ...prev, [input]: data?.recipes }));
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    let timer = setTimeout(() => getRecipes(), 300);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <h1>Auto Completion Search </h1>

      <input
        type="text"
        value={input}
        onFocus={() => setShowRes(true)}
        onBlur={() => setTimeout(() => setShowRes(false), 200)}
        onChange={(e) => setInput(e.target.value)}
      />

      {showRes && (
        <div className="res-container">
          {response.length > 0 ? (
            response.map((r) => (
              <span className="res" key={r.id}>
                {r.name}
              </span>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
