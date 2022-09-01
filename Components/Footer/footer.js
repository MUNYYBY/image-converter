import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="align-self-baseline mt-5 mt-lg-3 w-100 position-absolute bottom-0 left-0">
      <div className="footer-bottom bg-white border-top">
        <div className="container pb-1 pb-md-0">
          <div className="d-block px-3 px-md-5 pb-1 pb-md-0">
            <div className="row py-4 border-bottom border-black px-lg-5 justify-content-center align-items-center">
              <div className="col-md-4 mb-md-0 mb-3">
                <div className="Brand-name">
                  <div className="d-flex flex-direction-row  align-items-center">
                    <div className="mx-1">
                      <Image
                        src={Logo}
                        alt="image-converter logo"
                        height={65}
                        width={65}
                      />
                    </div>
                    <h4>Image-converter</h4>
                  </div>
                  <p className="col-md-10">
                    Lorem ipsum dolor sit amet dolor sit consectetur adipiscing
                    elit aliquam
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Tools</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="link-dark">
                      Image Converter
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-dark">
                      Image Meta Checker
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-dark">
                      Image Compression
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="link-dark">
                      Video Converter
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 py-md-4 text-black">
                <div className="d-block px-2 px-md-0 mt-4 mt-md-0">
                  <div className="fs-5 font-weight-bold">Stay up to date!</div>
                  <div>
                    <form
                      id="email_list_form"
                      action=""
                      method="post"
                      className="w-100"
                    >
                      <div id="subscribe-footer" className="input-group my-3">
                        <span
                          id="email_list_mssg"
                          className="w-100 text-warning fs-8"
                        ></span>
                        <input
                          type="hidden"
                          name="_token"
                          value="EaVdDeoHjisX6B09HQ2Pjw0PLloogWhiMJFWeg3p"
                        />
                        <input
                          type="email"
                          name="email"
                          id="email_sub"
                          className="form-control bg-transparent text-black placeholder-black border-2 border-black border-end-0"
                          placeholder="Your email"
                          aria-label="Subscribe"
                          aria-describedby="footer-Subscribe-btn"
                          required=""
                        />
                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="captcha-note fs-8">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <Link href="https://policies.google.com/privacy">
                      <a
                        className="text-decoration-none text-black"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </Link>{" "}
                    and{" "}
                    <Link href="https://policies.google.com/terms">
                      <a
                        className="text-decoration-none text-black"
                        target="_blank"
                      >
                        Terms of Service
                      </a>
                    </Link>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3 row mb-3 pb-md-0">
              <div className="col-12 col-md-4 text-black text-center text-md-left mt-3 mt-md-0">
                Copyright © 2022 Image Converter
              </div>
              <div className="col-12 col-md-6 text-black text-center mt-3 mt-md-0">
                All Rights Reserved |{" "}
                <span style={{ color: "var(--Main-Color)" }}>
                  Terms and Conditions
                </span>{" "}
                |{" "}
                <span style={{ color: "var(--Main-Color)" }}>
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
