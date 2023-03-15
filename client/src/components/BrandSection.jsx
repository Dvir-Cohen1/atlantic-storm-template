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
        <img className="mr-16" width={150} src="/STEELSERIES-LOGO.png" alt="" />
        <img width={120} src="/STEAM-LOGO.png" alt="" />
      </div>
    </div>
  );
};

export default BrandSection;
