import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "./common/CustomLink";
const LIVE_STREAMS = [
  {
    userName: "User142",
    image: "/background.png",
    views: "2800 Views",
    streamLink: "",
  },
  {
    userName: "Guest32",
    image: "/background2.jpg",
    views: "1300 Views",
    streamLink: "",
  },
  {
    userName: "Guest32",
    image: "/background3.jpg",
    views: "644 Views",
    streamLink: "",
  },
];

const LiveStreams = () => {
  return (
    <section>
      <p className="font-semibold mb-3 tracking-widest">
        <span className="text-primary">LIVE</span> STREAMS
      </p>
      <div className="bg-card-background border-t-2 border-primary text-sm">
        {LIVE_STREAMS.map(({ userName, image, views, streamLink }, indexId) => {
          return (
            <div className="grid grid-cols-2 items-center" key={indexId}>
              <img className="m-2" src={image} />
              <div className="mx-5 flex flex-col justify-center gap-2">
                <p className="text-base text-primary font-semibold">
                  {userName}
                </p>
                <p className="text-xs text-lighter-text font-semibold">
                  {views}
                </p>
                <p className="text-xs text-primary font-semibold">
                  <Link className="text-primary hover:text-primary/80">
                    {"> "}
                    Check it now!
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center p-3 bg-card-alt-background">
        <CustomLink> see more </CustomLink>
      </div>
    </section>
  );
};

export default LiveStreams;
