import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
  WarningButton,
  DangerButton,
  DefaultButton,
} from "./common/Buttons";
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  secondary-whats-new bg-page-background">
        <div style={{ backgroundImage: `url('/background2.jpg')`,backgroundPosition:'center',backgroundSize:'cover' }}>WORLD CHAMPIONS
        <h6 className="text-sm font-normal text-primary my-3">Thu 18th Sep 2023 - 8PM</h6></div>
        <div style={{ backgroundImage: `url('/background3.jpg')`,backgroundPosition:'center',backgroundSize:'cover' }}>DUIS AUTE IRURE
        <h6 className="text-sm font-normal text-primary my-3">Thu 18th Sep 2023 - 8PM</h6></div>
        <div style={{ backgroundImage: `url('/background.png')`,backgroundPosition:'center',backgroundSize:'cover' }}>THE QUICK BROWN FOX
        <h6 className="text-sm font-normal text-primary my-3">Thu 18th Sep 2023 - 8PM</h6></div>
        {/* <img className="shadow-inner backdrop-blur-3xl drop-shadow-lg " src="/background.png" alt="" />
        <img className="shadow-inner drop-shadow-lg " src="/background.png" alt="" />
        <img className="shadow-inner drop-shadow-lg " src="/background.png" alt="" /> */}
      </div>
    </div>
  );
};

export default WhatsNew;
