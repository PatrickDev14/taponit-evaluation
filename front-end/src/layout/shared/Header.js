import React from "react";
import HeaderNav from "./HeaderNav";
import "./layout.css";
import headerImage from "./header.jpg";

function Header() {
  const style = {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
    backgroundPosition: "center",
    backgroundSize: "100% auto",
  };

  return (
    <div
      className="jumbotron jumbotron-fluid text-white border-dark pt-4"
      style={style}
    >      
      <div className="container">
        <h1 className="display-4 font-oxygen">Text Savvy Tees</h1>        
      </div>
      <HeaderNav />
    </div>
  );
}

export default Header;