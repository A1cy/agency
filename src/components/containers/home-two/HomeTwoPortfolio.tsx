import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/Campaign.jpg";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/SEO.jpg";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/Content.jpg";
import proj1 from "public/images/projects/it-projects/hatch.jpg";
import proj2 from "public/images/projects/it-projects/bstn.jpg";
import proj3 from "public/images/projects/it-projects/illus.jpg";
import proj4 from "public/images/projects/it-projects/4.jpg";
import proj5 from "public/images/projects/it-projects/5.jpg";
import proj6 from "public/images/projects/it-projects/sani.jpg";

const HomeTwoPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
      <div className="portfolio__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="portfolio__text-slider"
        >
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="#">
                  IT Portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="#">
                  Digital Portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="#">
                  IT Portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1 str">
                <Link href="#">
                  Digital Portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__text-slider-single">
              <h2 className="h1">
                <Link href="#">
                  IT Portfolio
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-xl-4 text-center">
            <div className="portfolio-two__filter-btn section__header g-ind">
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                All
              </button>
              <button
                aria-label="Filter Portfolio"
                className={
                  activeFilter === ".digital-marketing" ? "active" : ""
                }
                onClick={() => handleTabClick(".digital-marketing")}
              >
                <span>02</span>
                Digital Marketing
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".it-services" ? "active" : ""}
                onClick={() => handleTabClick(".it-services")}
              >
                <span>03</span>
                IT Services
              </button>
            </div>
          </div>
        </div>
        <div className="row masonry-grid">
          {/* Digital Marketing Projects */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main digital-marketing ${
              activeFilter === ".digital-marketing" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single portfolio__single-active topy-tilt fade-top">
              <Link href="digital-marketing">
                <Image src={one} alt="Social Media Campaign" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="digital-marketing">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="digital-marketing">
                    Social Media Campaign
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main digital-marketing ${
              activeFilter === ".digital-marketing" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="digital-marketing">
                <Image src={three} alt="SEO Optimization" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="digital-marketing">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="digital-marketing">
                    SEO Optimization
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main digital-marketing ${
              activeFilter === ".digital-marketing" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="digital-marketing">
                <Image src={five} alt="Content Marketing" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="digital-marketing">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="digital-marketing">
                    Content Marketing
                  </Link>
                </h4>
              </div>
            </div>
          </div>

          {/* IT Services Projects */}
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://hatch.com.sa/">
                <Image src={proj1} alt="HATCH Application" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://hatch.com.sa/">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://hatch.com.sa/">
                   HATCH Application
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://build-station.com">
                <Image src={proj2} alt="Build Station" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://build-station.com">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://build-station.com">Build Station</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://illuslighting.com">
                <Image src={proj3} alt="Illus Lighting" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://illuslighting.com">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://illuslighting.com">Illus Lighting</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://edu.mhg-int.com/">
                <Image src={proj4} alt="LMS | Academy" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://edu.mhg-int.com/">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://edu.mhg-int.com/">
                    LMS | Academy
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://savvy.a1xai.com/">
                <Image src={proj5} alt="Savvy AI SaaS Platform" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://savvy.a1xai.com/">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://savvy.a1xai.com/">
                    Savvy AI SaaS Platform
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main it-services ${
              activeFilter === ".it-services" || activeFilter === "*"
                ? ""
                : "hidden"
            }`}
          >
            <div className="portfolio__single topy-tilt fade-top">
              <Link href="https://hatchsanitary.com">
                <Image src={proj6} alt="Hatch Sanitary" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="https://hatchsanitary.com">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="https://hatchsanitary.com">Hatch Sanitary</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTwoPortfolio;
