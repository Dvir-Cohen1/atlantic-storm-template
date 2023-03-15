import React from "react";
import { PrimaryButton, DangerButton } from "../../components/common/Buttons";
import LatestNews from "../../components/LatestNews";
import LiveStreams from "../../components/LiveStreams";
const MainWidgets = () => {
  return (
    <div className="bg-page-background my-4 p-5 rounded-sm grid grid-cols-3 gap-3">
      <div className="col-span-2">
        <LatestNews />
      </div>

      <div>
        <LiveStreams />
      </div>
    </div>
  );
};

export default MainWidgets;
