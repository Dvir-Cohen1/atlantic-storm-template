import React from "react";
import { Link } from "react-router-dom";
import CommentCounter from "./common/CommentCounter";
import HorizontalRule from "./common/HorizontalRule";
import { LATEST_NEWS_SUMMERY_DATA } from "../data/mockData";

const LatestNewsSummeryList = () => {
  return (
    <div className="bg-card-background py-5">
      {LATEST_NEWS_SUMMERY_DATA.map(
        ({ title, createdAt, comments }, indexId) => {
          return (
            <div key={indexId} className="p-5 py-3 pb-0">
              <ul className="flex gap-3">
                <li>
                  <Link to={"/"}>{title}</Link>
                </li>
                <li className="text-sm text-light-text">{createdAt}</li>
                <li className="text-sm text-primary ml-auto">
                  <CommentCounter comments={comments} />
                </li>
              </ul>
              <HorizontalRule />
            </div>
          );
        }
      )}
    </div>
  );
};

export default LatestNewsSummeryList;
