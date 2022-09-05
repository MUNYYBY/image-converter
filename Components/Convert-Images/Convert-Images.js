import styles from "./Convert-Images.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { BiImageAdd } from "react-icons/bi";

export default function ConvertImages() {
  return (
    <section className="Images-converter-container">
      <Container>
        <Row className="justify-content-center align-items-center py-5">
          <Col md={10} sm={10}>
            <h1 className="text-center" style={{ fontWeight: 600 }}>
              Convert Images to any format of your like
            </h1>
          </Col>
          <Col md={10} sm={10}>
            <h4 className="text-center">
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum.
            </h4>
          </Col>
          <Col md={10} sm={10}>
            <div id={styles.ImagesConversionPit} className="w-100">
              <Form action="">
                <div className={styles.chooseImageBtn}>
                  <BiImageAdd size={50} color="black" />
                  <input type="file" className={styles.chooseFile_input} />
                </div>
              </Form>
            </div>
          </Col>
          <Col lg={8} md={10} sm={10} className="mt-5">
            <Accordion defaultActiveKey={["0"]} flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Advance Options</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Conversion Formats</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
