import React from "react";
import Image from "next/image";
import Link from "next/link";
// import thumb from "public/images/footer/footer-three-thumb.png";
import thumb from "public/images/footer/footer.jpg";
import logo from "public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" />
                <div className="footer-thumb__content">
                  <h5>head quarters, USA</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      901 N Pitt Str., Suite 170 Alexandria, USA
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@a1.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@a1.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Germany</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@a1.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@a1.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>India</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Wolfhager Strasse 425 - 70 Germany
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@a1.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@a1.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Poland</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Hans-Günther Meier, JCB-256, Poland
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@a1.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@a1.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Bangladesh</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Hans-Günther Meier, JCB-256, Poland
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (406) 555-0120
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@a1.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@a1.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                      <p>
                        Copyright &copy;
                        <span id="copyYear">{currentYear}</span> a1 by{" "}
                        <Link
                          href="https://themeforest.net/user/A1"
                          target="_blank"
                        >
                          A1
                        </Link>{" "}
                        . All Rights Reserved
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image
                          src={logo}
                          alt="Logo"
                          width={150} // Adjust the width as needed
                          height={150} // Adjust the height as needed
                          style={{
                            maxWidth: "150px",
                            height: "auto",
                            width: "100%",
                          }} // Ensure the image scales correctly
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
