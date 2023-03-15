import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  WarningButton,
  DangerButton,
  DefaultButton,
} from "./common/Buttons";

const secondary_cards_data = [
  {
    title: "WORLD CHAMPIONS",
    dueDate: "Thu 18th Sep 2023 - 8PM",
    image: "/background2.jpg",
  },
  {
    title: "DUIS AUTE IRURE",
    dueDate: "Thu 18th Sep 2023 - 8PM",
    image: "/background3.jpg",
  },
  {
    title: "THE QUICK BROWN FOX",
    dueDate: "Thu 18th Sep 2023 - 8PM",
    image: "/background.png",
  },
];

const WhatsNew = () => {
  return (
    <div className="bg-main-background">
      <div className="main-whats-new p-10 rounded-md border-b-2 border-primary">
        <div className="sm:w-fit md:w-fit lg:w-2/4">
          <h3 className="text-3xl">LOREM IPRUM DOLOR</h3>
          <h6 className="text-md text-primary my-3">Thu 18th Sep 2023 - 8PM</h6>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="my-5">
          <PrimaryButton> READ MORE </PrimaryButton>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  secondary-whats-new bg-page-background">
        {secondary_cards_data.map((data, indexId) => {
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
