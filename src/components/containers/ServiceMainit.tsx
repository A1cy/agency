import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMainit = () => {
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
                          <Link href="/service-single">Website Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Custom web design</li>
                        <li>Responsive design</li>
                        <li>UI/UX design</li>
                        <li>SEO-friendly</li>
                        <li>Brand integration</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
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
                          <Link href="/service-single">
                            E-commerce Development
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Shopping cart integration</li>
                        <li>Payment gateway setup</li>
                        <li>Product catalog management</li>
                        <li>Order management</li>
                        <li>Security enhancements</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          <Link href="/service-single">
                            Custom Web Applications
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Business-specific solutions</li>
                        <li>API integration</li>
                        <li>Scalable architecture</li>
                        <li>Performance optimization</li>
                        <li>Maintenance & support</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          <Link href="/service-single">CMS Integration</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>WordPress development</li>
                        <li>Joomla development</li>
                        <li>Drupal development</li>
                        <li>Content migration</li>
                        <li>Custom plugin development</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/service-single">Technical Support</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>24/7 support</li>
                        <li>Remote assistance</li>
                        <li>On-site support</li>
                        <li>System diagnostics</li>
                        <li>Troubleshooting</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/service-single">System Maintenance</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Regular updates</li>
                        <li>Performance monitoring</li>
                        <li>Security patches</li>
                        <li>Backup solutions</li>
                        <li>System optimization</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          07
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/service-single">Network Security</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Threat detection</li>
                        <li>Firewall setup</li>
                        <li>Data encryption</li>
                        <li>Security audits</li>
                        <li>Compliance consulting</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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
                          08
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/service-single">Disaster Recovery</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Data backup</li>
                        <li>System recovery</li>
                        <li>Emergency planning</li>
                        <li>Redundancy solutions</li>
                        <li>Business continuity</li>
                      </ul>
                      <div className="cta">
                        <Link href="/service-single">
                          <i className="icon-arrow-top-right"></i>
                          {/* <span>service details</span> */}
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

export default ServiceMainit;
