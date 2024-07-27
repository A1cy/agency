import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcess from "@/components/containers/service-details/UxProcess";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={5} footer={3} video={0}>
      <CmnBanner
        title="Digital Marketing Services"
        navigation="Digital Marketing Services"
      />
      <ServiceMain />
      <HomeTwoModal />
      <UxProcess />
      <HomeTestimonialThree />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
