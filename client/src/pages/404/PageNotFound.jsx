import React from "react";
import { PrimaryButton } from "../../components/common/Buttons";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center text-center align-center">
      <div className="text-9xl mb-5">
        404
        <p className="text-xl"> PAGE NOT FOUND</p>
      </div>
      <div>
        <Link to={"/"}>
          <PrimaryButton>back to home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
