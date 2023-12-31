import FooterFive from "@/src/layout/footers/footer-5";
import Header from "@/src/layout/headers/header";
import React from "react";
import Brand from "./brand";
import GallerySlider from "./gallery-slider";
import HeroBanner from "./hero-banner";
import MpCtaArea from "./mp-cta-area";
import Portfolio from "./portfolio";

const HomeSix = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <MpCtaArea />
      <Brand />
      <Portfolio />
      <GallerySlider />
      <FooterFive />
    </>
  );
};

export default HomeSix;
