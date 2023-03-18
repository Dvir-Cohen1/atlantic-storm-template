import React from "react";
import { PrimaryButton, DangerButton } from "../../components/common/Buttons";
import LatestNewsMainList from "../../components/LatestNewsMainList";
import LiveStreams from "../../components/LiveStreams";
import AdvertisingBlock from "../../components/AdvertisingBlock";
import LatestNewsSummeryList from "../../components/LatestNewsSummeryList";
import LatestBlogs from "../../components/LatestBlogs";

const MainWidgets = () => {
  return (
    <div className="bg-page-background my-4 p-3 rounded-sm grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
      <section className="col-span-3">
        <LatestNewsMainList />
        <LatestNewsSummeryList />
      </section>
      <section>
        <LiveStreams />
        <AdvertisingBlock />
        <LatestBlogs />
      </section>
    </div>
  );
};

export default MainWidgets;
