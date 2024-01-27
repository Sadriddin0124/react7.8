import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4 mt-5">
          <Link to="/posts" className="btn btn-success mx-2">
            Homework 1
          </Link>
          <Link to="/users" className="btn btn-success mx-2">
            Homework 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
