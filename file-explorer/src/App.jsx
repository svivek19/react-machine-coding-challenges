import React from "react";
import data from "./util/menu";
import FolderFileRender from "./components/FolderFileRender";

const App = () => {
  return (
    <div>
      <FolderFileRender data={data} />
    </div>
  );
};

export default App;
