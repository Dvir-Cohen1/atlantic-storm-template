import React from "react";
import LatestNewsMainList from "../../components/LatestNewsMainList";
import LiveStreams from "../../components/LiveStreams";
import AdvertisingBlock from "../../components/AdvertisingBlock";
import LatestNewsSummeryList from "../../components/LatestNewsSummeryList";
import LatestBlogs from "../../components/LatestBlogs";
import LatestGalleries from "../../components/LatestGalleries";
import LatestVideos from "../../components/LatestVideos";

const MainWidgets = () => {
  return (
    <div className="bg-page-background my-4 p-3 rounded-sm md:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-3">
      <section className="col-span-3">
        <LatestNewsMainList />
        <LatestNewsSummeryList />
        <LatestGalleries />
        <LatestVideos />
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
