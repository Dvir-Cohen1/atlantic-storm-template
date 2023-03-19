import React from "react";
import AppLogo from "../components/common/AppLogo";
const BrandSection = () => {
  return (
    <div className="mb-10  justify-between items-center hidden sm:flex md:flex lg:flex">
      <div>
        <div className="text-xs text-light-text/70 mx-2 my-2">Powered By</div>
        <AppLogo />
      </div>
      <div className="flex items-center">
        <img className="mr-16" width="150px" height="150px" loading="lazy" src="/STEELSERIES-LOGO.png" alt="img" />
        <img width="120px" height="120px" src="/STEAM-LOGO.png" loading="lazy" alt="img" />
      </div>
    </div>
  );
};

export default BrandSection;
