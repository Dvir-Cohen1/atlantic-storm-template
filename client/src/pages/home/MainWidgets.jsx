import React from "react";
import { PrimaryButton, DangerButton } from "../../components/common/Buttons";
import LatestNews from "../../components/LatestNews";
import LiveStreams from "../../components/LiveStreams";
import AdvertisingBlock from "../../components/AdvertisingBlock";
const MainWidgets = () => {
  return (
    <div className="bg-page-background my-4 p-5 rounded-sm grid grid-cols-4 gap-3">
      <div className="col-span-3">
        <LatestNews />
      </div>

      <div>
        <LiveStreams />
        <AdvertisingBlock />
      </div>
    </div>
  );
};

export default MainWidgets;
