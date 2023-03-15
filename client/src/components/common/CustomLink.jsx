import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to }) => {
  return (
    <Link to={to} className="text-primary hover:text-primary/80 tracking-widest uppercase">
      {children}
    </Link>
  );
};

export default CustomLink;
