import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModalAb from "@/components/containers/home-two/HomeTwoModalAb";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import OurMission from "@/components/containers/OurMission";
import OurAchievement from "@/components/containers/OurAchievement";

const AboutUs = () => {
  return (
    <Layout header={5} footer={3} video={0}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoModalAb />
      <HomeTwoAward />
      <OurMission />
      {/* <AboutSponsor /> */}
      {/* <OurAchievement /> */}
      <AboutCta />
    </Layout>
  );
};

export default AboutUs;
