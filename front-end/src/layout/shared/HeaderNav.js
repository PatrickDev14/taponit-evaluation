import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

function HeaderNav() {
  
  return (
    <div className="container">
      <div className="nav-item">
        <Link className="font-oxygen-heading nav-link text-light" to="/">
          <h1 className="h5">
            All Tees
          </h1>
        </Link>
      </div>      
    </div>
  );
}

export default HeaderNav;