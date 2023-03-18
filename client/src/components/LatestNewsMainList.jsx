import React from "react";
import { Link } from "react-router-dom";
import HorizontalRule from "./common/HorizontalRule";
import CustomLink from "./common/CustomLink";
import CommentCounter from "./common/CommentCounter";
import { LATEST_NEWS_DATA } from "../data/mockData";
import LatestTitle from "./common/LatestTitle";

const LatestNews = () => {
  return (
    <section>
      <LatestTitle secondWord="news" />
      {LATEST_NEWS_DATA.map(
        ({ image, title, description, createdAt, comments }, indexId) => {
          return (
            <div
              key={indexId}
              className={`bg-card-background latest-news-container flex mb-3 text-sm  p-3 ${
                indexId === 0 && "border-t-2 border-primary"
              }`}
            >
              <img className="mr-3 hidden lg:block" width={260} src={image} />
              <div>
                <span className="flex justify-between">
                  <h2 className="text-xl mb-2"><Link to={'/'}>{title}</Link></h2>
                  <CommentCounter comments={comments} />
                </span>

                <div className="text-light-text">
                  {description}
                  <HorizontalRule />
                  <div className="flex justify-between items-center">
                    <p className="text-lighter-text font-semibold">
                      {createdAt}
                    </p>

                    <CustomLink>read more</CustomLink>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

export default LatestNews;
