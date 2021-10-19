import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error!!! Page doesnt exist</h1>
      <Link to="/" className="btn">
        back home
      </Link>
    </div>
  );
};

export default Error;
