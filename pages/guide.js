import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Help() {
  return (
    <main className="Guide-to-all-the-tools">
      <Container>
        <Row
          className="d-flex flex-column justify-content-center align-items-center rounded py-5 my-4"
          style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
        >
          <Col sm={10}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-0">Guide</h1>
              <p className="mb-0 text-center">
                This section will give you walk-through of our tools!
              </p>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
}
