import React from "react";
import { Link } from "react-router-dom";

const AppLogo = () => {
  return (
    <div className="app-logo text-2xl">
      <Link className="hover:text-white" to={"/"}>
        <section>
          <div className="content">
            <h2>ATLANTIC</h2>
            <h2>ATLANTIC</h2>
          </div>
        </section>
        <span className="font-bold mx-1">STORM</span>
      </Link>
    </div>
  );
};

export default AppLogo;
