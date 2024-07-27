import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMainit from "@/components/containers/ServiceMainit";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={5} footer={3} video={0}>
      <CmnBanner title="IT Services" navigation="IT Services" />
      <ServiceMainit />
      <HomeTwoModal />
      <UxProcessTwo />
      <HomeTestimonialThree />
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
