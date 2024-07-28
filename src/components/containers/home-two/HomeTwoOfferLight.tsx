import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ball from "public/images/ball.png";

const HomeTwoOfferLight = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer-two light offer-two-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                what we offer
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">IT services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-two__slider-w" dir="rtl">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Website Design</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">E-commerce Development</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Custom Web Applications</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">CMS Integration</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Technical Support</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">System Maintenance</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Network Security</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  08
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Disaster Recovery</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  09
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Cloud Hosting</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  10
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Data Backup</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="offer-two__slider-rtl-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          speed={13000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          className="offer-two__slider-rtl"
        >
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  11
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Cloud Migration</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  12
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Cloud Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  13
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Custom Software</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  14
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Software Integration</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  15
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Software Testing</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  16
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">API Development</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  17
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Technology Strategy</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  18
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">System Analysis</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  19
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Project Management</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="offer-two__slider-single offer__cta">
              <div className="offer__cta-single">
                <span className="sub-title">
                  20
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link href="it">Compliance Consulting</Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={ball} alt="Image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoOfferLight;
