import React from "react";
import { Link } from "react-router-dom";
import { LATEST_BLOGS_DATA } from "../data/mockData";
import LatestTitle from "./common/LatestTitle";
import CommentCounter from "../components/common/CommentCounter";

const LatestBlogs = () => {
  return (
    <section>
      <LatestTitle secondWord="Blogs" />
      <div className="p-4 my-3 bg-card-background border-t-2 border-primary">
        {LATEST_BLOGS_DATA.map(
          ({ title, createdAt, comments, profileImage },indexId) => {
            return (
              <div key={indexId} className="flex items-center gap-2 text-sm py-3">
                <div>
                  <img width={35}  src={profileImage} alt={title} />
                </div>
                <div>
                  <Link to={"/"}>{title}</Link>
                  <div className="text-light-text text-xs"> {createdAt} </div>
                </div>
                <div className="ml-auto">
                  <CommentCounter comments={comments} />{" "}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default LatestBlogs;
