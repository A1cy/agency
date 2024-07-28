import React from "react";
import Layout from "@/components/layout/Layout";
import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import HomeThreeServicesLight from "@/components/containers/home-three/HomeThreeServicesLight";
import HomeTwoOfferLight from "@/components/containers/home-two/HomeTwoOfferLight";

// import HomeThreeAgency from "@/components/containers/home-three/HomeThreeAgency";
// import HomeThreePortfolio from "@/components/containers/home-three/HomeThreePortfolio";
import WorkStepsLight from "@/components/containers/home-three/WorkStepsLight";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import HomeThreeSponsor from "@/components/containers/home-three/HomeThreeSponsor";
import HomeThreeBlogLight from "@/components/containers/home-three/HomeThreeBlogLight";
import CtaThree from "@/components/containers/home-three/CtaThree";
import NextPageLight from "@/components/containers/home/NextPageLight";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";

const HomeThree = () => {
  return (
    <Layout header={5} footer={3} video={false}>
      <HomeThreeBanner />
      <HomeThreeServicesLight />
      <HomeTwoOfferLight />
      <HomeOneBanner />
      {/* <HomeThreeAgency /> */}
      <HomeTwoPortfolio />
      {/* <HomeThreePortfolio /> */}
      <WorkStepsLight />
      <HomeTestimonialThree />
      {/* <HomeThreeSponsor /> */}
      {/* <HomeThreeBlogLight /> */}
      <CtaThree />
      <NextPageLight />
    </Layout>
  );
};

export default HomeThree;
