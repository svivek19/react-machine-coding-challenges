import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
