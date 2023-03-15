import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { appRoutes } from "../../../routes/_routes";

const Navlinks = () => {
  const currentLocation = useLocation().pathname

  return (
    <div className="flex h-full items-center">
      {appRoutes.map((link, indexId) => {
        return (
          <div key={indexId} className={`navbar-links ml-10 ${currentLocation === link.path ? 'active-link':''}`}>
            <Link className="uppercase " to={link.path}>
              {link.linkLabel}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navlinks;
