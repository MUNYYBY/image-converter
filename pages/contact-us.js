import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineFileImage } from "react-icons/ai";

export default function ContactUs() {
  return (
    <main className="Guide-to-all-the-tools">
      <Container>
        <Row className="d-flex flex-column justify-content-center align-items-center my-4">
          <Col
            sm={10}
            className="rounded py-5"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-0">Contact-Us</h1>
              <p className="mb-0 text-center">
                This section will you details to contact-us if you in need of
                our help!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
