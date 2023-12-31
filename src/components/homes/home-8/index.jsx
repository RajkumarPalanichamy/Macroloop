import FooterTwo from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import Brand from "../home-5/brand";
import AboutArea from "./about-area";
import Blog from "./blog";
import BusinessJourney from "../../../common/business-journey";
import HeroBanner from "./hero-banner";
import OurTeam from "./our-team";
import PortfolioArea from "./portfolio-area";
import ServiceArea from "./service-area";
import Testimonial from "./testimonial";

const HomeEight = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <AboutArea />
      <ServiceArea  />
      <PortfolioArea />
      <OurTeam />
      <BusinessJourney />
      <Testimonial />
      <Brand style_8={true} />
      <Blog />
      <FooterTwo style_8={true} />
    </>
  );
};

export default HomeEight;
