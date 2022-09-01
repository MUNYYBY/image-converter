import Link from "next/link";

export default function Footer() {
  return (
    <footer className="align-self-baseline mt-5 mt-lg-3 w-100 position-absolute bottom-0 left-0">
      <div className="footer-logo text-center"></div>
      <div className="footer-top"></div>
      <div className="footer-bottom bg-white">
        <div className="container pb-5 pb-md-0">
          <div className="d-block px-3 px-md-5 pb-3 pb-md-0">
            <div className="row py-4 border-bottom border-black px-lg-5 row-shrinker">
              <div className="col-6 col-md-3 py-2 py-md-4 offset-md-1">
                <h2>Tools</h2>
                <Link href="">
                  <a className="btn btn-block btn-link text-black fs-6 w-100">
                    Image Converter
                  </a>
                </Link>
                <Link href="">
                  <a className="btn btn-block btn-link text-black fs-6 w-100 text-align-left">
                    Image Meta Checker
                  </a>
                </Link>
                <Link href="">
                  <a className="btn btn-block btn-link text-black fs-6 w-100">
                    Image Compression
                  </a>
                </Link>
                <Link href="">
                  <a className="btn btn-block btn-link text-black fs-6 w-100">
                    Video Converter
                  </a>
                </Link>
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
            <div className="py-3 d-flex flex-direction-row justify-content-between align-items-center mb-3 pb-md-0">
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
