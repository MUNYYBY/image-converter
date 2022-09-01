import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container
        fluid
        className="d-flex flex-direction-row justify-content-center"
      >
        <Navbar.Brand href="#">
          <div className="Brand-name d-flex flex-direction-row justify-content-center align-items-center">
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title={<span className="h4">Tools</span>}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">
                Image converter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Image Meta Checker
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Image Compression
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Video converter
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-4">
              <div className={styles.headerNavDevider}></div>
            </Nav.Link>
            <Nav.Link href="#action1">
              <p className="h4">Help</p>
            </Nav.Link>
            <Nav.Link className="mx-4">
              <div className={styles.headerNavDevider}></div>
            </Nav.Link>
            <Nav.Link href="#action2">
              <p className="h4">Contact Us</p>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
