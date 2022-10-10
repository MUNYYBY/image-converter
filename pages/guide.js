import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineFileImage } from "react-icons/ai";

export default function Help() {
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
              <h1 className="mb-0">Guide</h1>
              <p className="mb-0 text-center">
                This section will give you walk-through of our tools!
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={10} className="mt-4">
            <div
              className="rounded"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                border: "rgba(0, 0, 0, 0.5) 2px dashed",
              }}
            >
              <AiOutlineFileImage size={32} />
              <h4>Image-Converter</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
