import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import one from "public/images/portfolio/one.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="javascript:void(0)">
                            Social Media Management
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Account Management</li>
                        <li>Content Creation</li>
                        <li>Community Engagement</li>
                        <li>Analytics & Reporting</li>
                      </ul>
                      <div className="cta">
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-top-right"></i>
                           
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="javascript:void(0)">
                            Search Engine Optimization (SEO)
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>On-Page SEO</li>
                        <li>Off-Page SEO</li>
                        <li>Technical SEO</li>
                        <li>SEO Audits</li>
                      </ul>
                      <div className="cta">
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-top-right"></i>
                           
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="javascript:void(0)">
                            Pay-Per-Click (PPC) Advertising
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Google Ads</li>
                        <li>Social Media Ads</li>
                        <li>Display Advertising</li>
                        <li>Campaign Optimization</li>
                      </ul>
                      <div className="cta">
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-top-right"></i>
                           
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="javascript:void(0)">Content Marketing</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Blogging</li>
                        <li>E-books and Whitepapers</li>
                        <li>Infographics</li>
                        <li>Video Marketing</li>
                      </ul>
                      <div className="cta">
                        <Link href="javascript:void(0)">
                          <i className="icon-arrow-top-right"></i>
                           
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ServiceMain;
