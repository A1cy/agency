import React from "react";
import Image from "next/image";
import Link from "next/link";
// import thumb from "public/images/footer/footer-three-thumb.png";
import thumb from "public/images/footer/footer.jpg";
import logo from "public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="section footer-three pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" />
                <div className="footer-thumb__content">
                  <h5>head quarters, KSA</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/dir/%20/24.7257219778644,46.642653679921"
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Prince Turki Ibn Abdulaziz Al Awwal Rd, King Saud
                      University, Riyadh 12371
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:966556096364">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (966) 55 609 6364
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:966554878434">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      (966) 55 487 8434
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@AlyaNajd.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      info@AlyaNajd.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href="https://www.google.com/maps/dir/%20/24.7257219778644,46.642653679921"
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="footer-four__content">
              <div className="intro text-center">
                <h2 className="light-title text-uppercase title-anim">
                  Let&apos;s make some magic ✨ happen and show the world what
                  your brand is all about!
                </h2>
              </div>
              <div className="row justify-content-center cta-t section__content-cta">
                <div className="col-12 col-md-8 text-center">
                  <h3>
                    <Link href="contact-us">
                      Let&apos;s Talk
                      <i className="fa-regular fa-comment-dots"></i>
                    </Link>
                  </h3>
                  <p>Let&apos;s make your brand the talk of the town</p>
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
                        <span id="copyYear">{currentYear}</span> By{" "}
                        <Link href="/" target="_blank">
                          AN
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
