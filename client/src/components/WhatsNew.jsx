import React from "react";
import { MAIN_CARD_DATA, SECONDARY_CARDS_DATA } from "../data/mockData";
import { PrimaryButton } from "./common/Buttons";

const WhatsNew = () => {
  return (
    <div className="bg-main-background">
      <div className="main-whats-new p-10 rounded-md border-b-2 border-primary">
        <div className="sm:w-fit md:w-fit lg:w-2/4">
          <h3 className="text-3xl">{MAIN_CARD_DATA.title}</h3>
          <h6 className="text-md text-primary my-3">
            {MAIN_CARD_DATA.createdAt}
          </h6>
          <p className="text-sm">{MAIN_CARD_DATA.content}</p>
        </div>
        <div className="my-5">
          <PrimaryButton> READ MORE </PrimaryButton>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  secondary-whats-new bg-page-background">
        {SECONDARY_CARDS_DATA.map((data, indexId) => {
          return (
            <div
              key={indexId}
              style={{
                backgroundImage: `url('${data.image}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {data.title}
              <hr className="w-10 mt-2 text-primary" />
              <h6 className="text-sm font-normal text-primary my-3">
                {data.dueDate}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsNew;
