import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./common/CustomLink";
import LatetsTitle from "./common/LatestTitle";
import { LIVE_STREAMS_DATA } from "../data/mockData";

const LiveStreams = () => {
  return (
    <section>
      <LatetsTitle firstWord="live" secondWord="streams" />
      <div className="bg-card-background border-t-2 border-primary text-sm">
        {LIVE_STREAMS_DATA.map(({ userName, image, views, streamLink }, indexId) => {
          return (
            <div className="grid grid-cols-2 items-center" key={indexId}>
              <img className="m-2 hidden md:block" loading="lazy" src={image} alt={userName} />
              <div className="mx-5 flex flex-col justify-center gap-2">
                <p className="text-base text-primary font-semibold">
                  {userName}
                </p>
                <p className="text-xs text-lighter-text font-semibold">
                  {views}
                </p>
                <p className="text-xs text-primary font-semibold">
                  <Link
                    title="open stream"
                    className="text-primary hover:text-primary/80"
                  >
                    {"> "}
                    Check it now!
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center p-3 bg-card-alt-background text-sm">
        <CustomLink> see more </CustomLink>
      </div>
    </section>
  );
};

export default LiveStreams;
