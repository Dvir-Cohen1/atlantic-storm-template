import React from "react";
import LatestTitle from "./common/LatestTitle";
import { LATEST_GALLERIES_DATA } from "../data/mockData";

const LatestGalleries = () => {
  return (
    <section className="my-3">
      <LatestTitle secondWord="galleries" />
      <div className="bg-card-background p-5 border-t-2 border-primary">
        <div className="flex flex-wrap justify-between  items-center text-center">
          {LATEST_GALLERIES_DATA.map(
            ({ title, createdAt, imagePath }, indexId) => {
              return (
                <div
                  key={indexId}
                  className="mx-auto bg-card-alt-background hover:bg-primary hover:text-black"
                >
                  <img className="w-full md:w-60" loading="lazy" src={imagePath} alt={title} />
                  <div className="text-sm p-3 text-left">
                    <h2>{title}</h2>
                    <p className="text-light-text text-xs">{createdAt}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestGalleries;
