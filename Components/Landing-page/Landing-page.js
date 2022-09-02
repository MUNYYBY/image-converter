import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="Landing-page mt-5 w-100">
      <Container className="w-100">
        <Row className="justify-content-center align-items-center">
          <Col lg={6} sm={10}>
            <div className="d-flex flex-column">
              <div className="text-align-left my-2">
                <h1
                  className="font-weight-bold text-align-left "
                  style={{ fontWeight: 600 }}
                >
                  Managing business payments has never been easier
                </h1>
              </div>
              <div className="text-align-left my-2">
                <h4 className="font-weight-bold text-align-left ">
                  Yet bed any for travelling assistance indulgence unpleasing.
                  Not thoughts all exercise blessing. Indulgence way everything.
                </h4>
              </div>
              <div>
                <button className="rounded-pill p-3 px-4 btn btn-primary">
                  Convert Now
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={10} className="mt-3 px-lg-5">
            <div className="d-flex flex-column w-100">
              <div className="">
                <h4 className="text-primary">Get Started for free!</h4>
              </div>
              <form className="w-100 py-3">
                <input
                  type="email"
                  name="email"
                  className="form-control bg-white text-black placeholder-black border-2 border-black w-100 my-2"
                  placeholder="Email Address"
                  required=""
                />
                <input
                  type="password"
                  name="password"
                  className="form-control bg-white text-black placeholder-black border-2 border-black w-100 my-2"
                  placeholder="Password"
                  required=""
                />
              </form>
              <button className="p-3 btn btn-primary w-100">Convert Now</button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center w-100 py-5">
          <Col lg={8} sm={10}>
            <h1 className="text-center text-underline">
              <u>Convert Images to any format of your like</u>
            </h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
