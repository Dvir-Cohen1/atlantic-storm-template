import React from "react";
import HorizontalRule from "./common/HorizontalRule";
import CustomLink from "../components/common/CustomLink";

import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LATEST_NEWS_DATA = [
  {
    title: "Lorem Ipsum is simply dummy text",
    description:
      "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    createdAt: "Thu 18th Sep - 2023 - 8:00pm",
    image: "/background2.jpg",
    comments: "12",
    path: "",
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    description:
      "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    createdAt: "Thu 18th Sep - 2023 - 8:00pm",
    image: "/background3.jpg",
    comments: "24",
    path: "",
  },
  {
    title: "Lorem Ipsum is simply dummy text",
    description:
      "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen",
    createdAt: "Thu 18th Sep - 2023 - 8:00pm",
    image: "/background.png",
    comments: "46",
    path: "",
  },
];

const LatestNews = () => {
  return (
    <section>
      <p className="font-semibold tracking-widest pb-3 border-b-2 border-primary">
        <span className="text-primary">LATEST</span> NEWS
      </p>

      {LATEST_NEWS_DATA.map(
        ({ image, title, description, createdAt,comments }, indexId) => {
          return (
            <div
              key={indexId}
              className=" bg-card-background latest-news-container flex mb-3 text-sm  p-3"
            >
              <img className="mr-3" width={260}src={image} />
              <div>
                <span className="flex justify-between">
                  <h2 className="text-xl mb-2">{title}</h2>
                  <span>
                    <FontAwesomeIcon className="mx-2 text-primary" icon={faCommentAlt} />
                    {comments}
                  </span>
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
