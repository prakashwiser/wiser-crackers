import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow top-0">
      <div className="container">
        <a className="navbar-brand text-success m-auto fw-bold fs-3" href="/">
          Wiser Crackers
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
