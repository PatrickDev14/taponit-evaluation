import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

function HeaderNav() {
  const style = {
    padding: "1rem 0 3rem",
  };

  return (
    <div className="nav justify-content-start" style={style}>
      <div className="nav-item d-none d-lg-block d-xl-block">
        <Link className="font-oxygen-heading nav-link mx-2 text-light" to="/">
          <h1 className="h5">
            All Tees
          </h1>
        </Link>
      </div>      
    </div>
  );
}

export default HeaderNav;