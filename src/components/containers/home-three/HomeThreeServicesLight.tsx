import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dotlarge from "public/images/agency/dot-large.png";
// import one from "public/images/service/one.png";
import one from "public/images/logo-icon-dark.png";

const HomeThreeServicesLight = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section service-f fade-wrapper light service-f-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary g-ind">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      What we offer
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">Digital Marketing Services</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-center text-lg-end">
                    <Link
                      href="digital-marketing"
                      className="btn btn--primary text-capitalize"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    01
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Social Media Management</h4>
                  <div className="p-single">
                    <p>
                      We handle profiles on platforms like Facebook, Instagram,
                      Twitter, and LinkedIn, developing engaging graphics,
                      videos, and posts while interacting with followers and
                      responding promptly.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Account Management
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Content Creation
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Community Engagement
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Analytics & Reporting
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    02
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Search Engine Optimization (SEO)</h4>
                  <div className="p-single">
                    <p>
                      Optimize your website with on-page, off-page, and
                      technical SEO services, ensuring enhanced site speed,
                      mobile responsiveness, and comprehensive audits.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      On-Page SEO
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Off-Page SEO
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Technical SEO
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      SEO Audits
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    03
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Pay-Per-Click (PPC) Advertising</h4>
                  <div className="p-single">
                    <p>
                      Create and manage Google Ads, social media ads, and
                      display advertising campaigns, continuously optimizing for
                      better ROI.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Google Ads
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Social Media Ads
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Display Advertising
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Campaign Optimization
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <span className="sub-title">
                    04
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                  <h4>Content Marketing</h4>
                  <div className="p-single">
                    <p>
                      Create engaging content including blogs, e-books,
                      infographics, and videos to enhance brand visibility and
                      audience engagement.
                    </p>
                  </div>
                </div>
                <div className="p-single single-item p-sm">
                  <ul>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Blogging
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      E-books and Whitepapers
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Infographics
                    </li>
                    <li>
                      <i className="fa-solid fa-angle-right"></i>
                      Video Marketing
                    </li>
                  </ul>
                </div>
                <div className="single-item p-single p-sm">
                  <Image src={one} alt="Image" />
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={dotlarge} alt="Image" className="dot-img" />
    </section>
  );
};

export default HomeThreeServicesLight;
