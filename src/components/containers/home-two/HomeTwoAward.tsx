import React from "react";
import Image from "next/image";
import Link from "next/link";
// import awardthumb from "public/images/award-thumb.png";
import awardthumb from "public/images/about.jpg";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";

const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="award__thumb dir-rtl">
              <Image src={awardthumb} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                OUR STORY
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Our <span>Journey</span>
              </h2>
              <div className="paragraph">
                <p>
                  From our inception to becoming a leader in the digital space,
                  our journey has been fueled by innovation, dedication, and a
                  commitment to excellence. Here's a look at some of the
                  significant milestones in our story.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2015</h4>
                  <h4>Foundation</h4>
                  <p>
                    We started our journey with a vision to transform digital
                    experiences.
                  </p>
                </div>
               
                <div className="single">
                  <h4>2019</h4>
                  <h4>Global Expansion</h4>
                  <p>
                    Expanded our services globally, establishing a strong
                    international presence.
                  </p>
                </div>
                <div className="single">
                  <h4>2021</h4>
                  <h4>Innovation Award</h4>
                  <p>
                    Recognized for our innovative solutions in digital marketing
                    and technology.
                  </p>
                </div>
                <div className="single">
                  <h4>2023</h4>
                  <h4>Continued Growth</h4>
                  <p>
                    Continuing to expand and innovate, providing cutting-edge
                    solutions to our clients.
                  </p>
                </div>
              </div>
              {/* <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
