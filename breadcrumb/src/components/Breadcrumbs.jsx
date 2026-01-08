import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").filter(Boolean);

  console.log(paths);

  return (
    <div>
      <Link to="/">Home</Link>

      {paths.map((path, index) => {
        const routeTo = "/" + paths.slice(0, index + 1).join("/");
        console.log(routeTo);

        return (
          <span key={routeTo}>
            {" / "}
            <Link to={routeTo}>{path}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
