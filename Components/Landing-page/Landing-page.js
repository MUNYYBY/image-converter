import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { TbFileDownload } from "react-icons/tb";

export default function LandingPage() {
  return (
    <main className="Landing-page mt-5 w-100">
      <Container>
        <Row className="Landing-information justify-content-center align-items-center py-5 px-lg-5">
          <Col lg={6} sm={10}>
            <div className="d-flex flex-column">
              <div className="text-align-left my-2">
                <h1
                  className="font-weight-bold text-align-left "
                  style={{ fontWeight: 600 }}
                >
                  Managing business payments has never been easier!
                </h1>
              </div>
              <div className="text-align-left my-2">
                <h4 className="font-weight-bold text-align-left ">
                  Yet bed any for travelling assistance indulgence unpleasing.
                  Not thoughts all exercise blessing. Indulgence way everything.
                </h4>
              </div>
              <div>
                <Button className="rounded-pill p-3 px-4 btn btn-primary">
                  Convert Now
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={10} className="mt-3 px-lg-5 ">
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
              <Button className="p-3 btn btn-primary w-100">Get Started</Button>
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
        <Row className="justify-content-center align-items-center pb-5">
          <Col lg={4} md={6} sm={10} className="Features-card">
            <div className="position-relative p-4 bg-light d-flex flex-column justify-content-between rounded">
              <div
                className="position-absolute bottom-0 right-0 z-index-0"
                style={{ paddingLeft: "60%" }}
              >
                <h1
                  style={{
                    fontSize: "12rem",
                    color: "black",
                    opacity: "0.05",
                  }}
                >
                  1
                </h1>
              </div>
              <div className="card-content z-index-1">
                <div
                  className="d-block p-2 mb-2 bg-white d-flex flex-column justify-content-center align-items-center rounded"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <HiOutlineLightBulb size={40} color="#00FF24" />
                </div>
                <h4>Download Converted Image</h4>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={10} className="Features-card">
            <div className="position-relative p-4 bg-light d-flex flex-column justify-content-between rounded">
              <div
                className="position-absolute bottom-0 right-0 z-index-0"
                style={{ paddingLeft: "60%" }}
              >
                <h1
                  style={{
                    fontSize: "12rem",
                    color: "black",
                    opacity: "0.05",
                  }}
                >
                  2
                </h1>
              </div>
              <div className="card-content z-index-1">
                <div
                  className="d-block p-2 mb-2 bg-white d-flex flex-column justify-content-center align-items-center rounded"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <RiPencilRuler2Line size={40} color="#00FF24" />
                </div>
                <h4>Select Format</h4>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={10} className="Features-card">
            <div className="position-relative p-4 bg-light d-flex flex-column justify-content-between rounded">
              <div
                className="position-absolute bottom-0 right-0 z-index-0"
                style={{ paddingLeft: "60%" }}
              >
                <h1
                  style={{
                    fontSize: "12rem",
                    color: "black",
                    opacity: "0.05",
                  }}
                >
                  3
                </h1>
              </div>
              <div className="card-content z-index-1">
                <div
                  className="d-block p-2 mb-2 bg-white d-flex flex-column justify-content-center align-items-center rounded"
                  style={{ width: "4rem", height: "4rem" }}
                >
                  <TbFileDownload size={40} color="#00FF24" />
                </div>
                <h4>Download Converted Image</h4>
                <p>
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center w-100 py-5">
          <Col
            lg={12}
            sm={10}
            className="rounded p-4 bg-light d-flex flex-row justify-content-between align-items-center"
          >
            <h4 className="text-left">
              Convert Images to any format of your like
            </h4>
            <button className="btn btn-primary">Convert Images</button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
