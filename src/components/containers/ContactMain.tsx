import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone </h4>
                <p>
                  <Link href="tel:966-556-096-364">
                    Mobile : +966-556-096-364
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto:Info@alyanajd.com">Info@alyanajd.com</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/dir/+/24.725722,46.6426537/@24.7257787,46.6014329,13z/data=!3m1!4b1?entry=ttu"
                    target="_blank"
                  >
                    Prince Turki Ibn Abdulaziz Al Awwal Rd, King Saud
                    University, Riyadh 12371
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06pm</p>
                <p>Fri - Sat 4 pm - 10pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.0195893463424!2d46.64194627777598!3d24.726207736006845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d0054c9eb4d%3A0x8794dabb3b928767!2sLiberica%20Horeca%20Co.!5e0!3m2!1sen!2ssa!4v1722147161988!5m2!1sen!2ssa"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
                            required
                          />
                        </div>
                        <div className="group-input">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select
                          className="subject"
                          name="contact-subject"
                          required
                        >
                          <option value="" disabled selected>
                            Subject
                          </option>
                          <option value="General Inquiry">
                            General Inquiry
                          </option>
                          <option value="Account Setup">Account Setup</option>
                          <option value="Service Information">
                            Service Information
                          </option>
                          <option value="Pricing Details">
                            Pricing Details
                          </option>
                          <option value="Technical Support">
                            Technical Support
                          </option>
                          <option value="Consultation Request">
                            Consultation Request
                          </option>
                          <option value="Partnership Opportunity">
                            Partnership Opportunity
                          </option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="group-input">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                       
                          required
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
