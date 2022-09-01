import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
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
        <Navbar.Offcanvas id="navbarScroll" className="" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="m-auto my-2 my-lg-0 justify-content-center"
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
              <Nav.Link className="mx-4 d-none d-lg-block">
                <div className={styles.headerNavDevider}></div>
              </Nav.Link>
              <Nav.Link href="#action1">
                <p className="h4">Help</p>
              </Nav.Link>
              <Nav.Link className="mx-4 d-none d-lg-block">
                <div className={styles.headerNavDevider}></div>
              </Nav.Link>
              <Nav.Link href="#action2">
                <p className="h4">Contact Us</p>
              </Nav.Link>
            </Nav>
            <Nav justify-content-center>
              <Nav.Link href="#action2">
                <p className="h4 color-black">Login</p>
              </Nav.Link>
              <Button className="primary mx-1">Sign up</Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
