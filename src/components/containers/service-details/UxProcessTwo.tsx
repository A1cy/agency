import React, { useState } from "react";

const UxProcessTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Our Process
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Working Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 0 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Discovery & Strategy</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We begin by understanding your business needs, goals, and
                    challenges. Through detailed discussions and analysis, we
                    formulate a strategic plan tailored to your requirements.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 1 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Design & Prototyping</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our design team creates wireframes and prototypes to
                    visualize the solution. This stage involves iterative
                    feedback and refinement to ensure alignment with your
                    vision.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 2 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Development & Integration</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our developers build the solution using the latest
                    technologies and best practices. We integrate all necessary
                    components to ensure seamless functionality and performance.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 3 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Testing & Quality Assurance</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    We conduct thorough testing to identify and resolve any
                    issues. Our quality assurance process ensures that the
                    solution meets the highest standards of performance,
                    security, and usability.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 4 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Deployment & Launch</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    After rigorous testing, we deploy the solution to your
                    environment. We ensure a smooth transition and provide
                    training and documentation to help your team get started.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab === 5 ? " service-f-single-active" : "")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Support & Maintenance</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    Our work doesn't end at launch. We provide ongoing support
                    and maintenance to ensure your solution continues to perform
                    optimally. We address any issues and implement updates as
                    needed.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcessTwo;
