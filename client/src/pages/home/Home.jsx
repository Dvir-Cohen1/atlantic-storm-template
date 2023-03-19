import React, { lazy, Suspense } from "react";
// import WhatsNew from "../../components/WhatsNew";
// import BrandSection from "../../components/BrandSection";
// import MainWidgets from "./MainWidgets";
const WhatsNew = lazy(() => import("../../components/WhatsNew"));
const BrandSection = lazy(() => import("../../components/BrandSection"));
const MainWidgets = lazy(() => import("./MainWidgets"));
const ImageCarousel = lazy(() =>
  import("../../components/common/ImageCarousel")
);
const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <BrandSection />
        <WhatsNew />
        <MainWidgets />
        <ImageCarousel />
      </Suspense>
    </>
  );
};

export default Home;
