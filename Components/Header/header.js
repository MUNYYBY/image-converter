import React, { useState, useEffect } from "react";
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
import Link from "next/link";
import getImagesCount from "../../firebase-modules/getCount";
import { AiOutlineNumber } from "react-icons/ai";
import FlipNumbers from "react-flip-numbers";

export default function Header() {
  const [imagesConversionCount, setImagesConversionCount] = useState(null);
  useEffect(() => {
    getImagesCount(setImagesConversionCount);
  }, []);
  return (
    <Navbar
      id={styles.Header}
      bg="light"
      expand="lg"
      className="border-bottom sticky-top"
    >
      <Container className="w-100">
        <Navbar.Brand>
          <Link href="/">
            <div
              id={styles.SiteInfoContainer}
              className="Brand-name d-flex flex-direction-row justify-content-center align-items-center"
            >
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
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Offcanvas id="navbarScroll" className="" placement="end">
          <Offcanvas.Header closeButton className="border-bottom">
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="m-auto my-2 my-lg-0 justify-content-center align-items-center"
              navbarScroll
            >
              <NavDropdown
                title={<span className="h4">Tools</span>}
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>
                  <Link href="/tools/image-converter">
                    <a className="link-dark text-decoration-none m-0">
                      Image converter
                    </a>
                  </Link>
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
              <div
                className="d-flex flex-row-reverse jsutify-content-center align-items-center"
                style={{ width: "15rem" }}
              >
                <div className="d-flex flex-column jsutify-content-center align-items-center">
                  <div className="d-flex jsutify-content-center align-items-center">
                    <AiOutlineNumber size={28} />
                    <h2 className="m-0">
                      <FlipNumbers
                        height={20}
                        width={20}
                        color="black"
                        background="none"
                        play
                        perspective={100}
                        numbers={imagesConversionCount?.toLocaleString()}
                      />
                      {/* {imagesConversionCount?.toLocaleString()} */}
                    </h2>
                  </div>
                  <div>
                    <p className="m-0">Images Converted!</p>
                  </div>
                </div>
              </div>
              {/* <Nav.Link href="#action2">
                <p className="h4 color-black">Login</p>
              </Nav.Link>
              <Button className="primary mx-1">Create Account</Button> */}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
