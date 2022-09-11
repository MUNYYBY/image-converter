import React, { useEffect, useState, useRef } from "react";
import styles from "./Convert-Images.module.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { BiImageAdd } from "react-icons/bi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Image from "next/image";
import uploadImage from "../../public/assets/upload.svg";
import ImageContainer from "../Image-Container/Image-Container";
import { useDropzone } from "react-dropzone";

export default function ConvertImages() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const hiddenFileInput = useRef(null);
  const handleChooseFileBtn = (event) => {
    hiddenFileInput.current.click();
  };
  const handleFileInputChange = (e) => {
    const fileToBeUploaded = e.target.files;
    console.log(fileToBeUploaded);
    if (e.target.files && e.target.files[0]) {
      const t = e.target.files[0];
      setImage(t);
      setCreateObjectURL(URL.createObjectURL(t));
    }
  };
  return (
    <section className="Images-converter-container">
      <img src={createObjectURL} />
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
            <div id={styles.UploadImagesPit} className="w-100">
              <div className="Upload-Images-pit-content-container d-flex flex-column justify-content-center align-items-center">
                <div className="drag-and-drop-container d-flex flex-column justify-content-center align-items-center">
                  <Image
                    src={uploadImage}
                    height={100}
                    width={100}
                    rel="upload image for upload pit"
                  />
                  <p>Drag and drop files here</p>
                </div>
                <div className="choose-files-container d-flex flex-column justify-content-center align-items-center w-75">
                  <Button
                    onClick={handleChooseFileBtn}
                    className="d-flex flex-row justify-content-center align-items-center"
                  >
                    <BiImageAdd size={50} color="black" />
                    <h4 className="m-0">Choose file</h4>
                  </Button>
                  <input
                    type="file"
                    className={styles.chooseFile_input}
                    multiple={true}
                    placeholder="Choose file"
                    ref={hiddenFileInput}
                    onChange={handleFileInputChange}
                  />
                  <p className="text-center mt-2">
                    Upload your image or drag and drop (max size 20 mb) You can
                    convert up-to 10 images at a time
                  </p>
                </div>
              </div>
            </div>
          </Col>
          {/* Image containers when user uploads images */}
          <Col lg={8} md={10} sm={10} className="my-3">
            <div id={styles.ImagesContainerStack}>
              <ImageContainer
                imageName="Hello world.jpeg"
                imageSize="322.53kb "
              />
              <ImageContainer
                imageName="Hello world.jpeg"
                imageSize="322.53kb "
              />
            </div>
          </Col>
          <Col lg={8} md={10} sm={10} className="my-2">
            <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
              <p className="me-md-4 mb-0 mb-sm-2 text-left fs-6">
                <b>Note:</b> We only store you image for the life span of
                coversion, when images are converted they are automatically
                deleted from our database.
              </p>
              <button className="btn btn-primary fs-4 d-flex flex-row justify-content-between align-items-center">
                {" "}
                <CgArrowsExchangeAlt size={35} />
                Convert
              </button>
            </div>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={10}
            className="panel panel-default rounded shadow me-md-1 p-4 my-sm-3"
          >
            <div className="panel-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="QualityRadio1"
                  id="QualityRadio1"
                />
                <label className="form-check-label" for="QualityRadio1">
                  <div className="formPanelContentContainer">
                    <p className="fw-bold mb-0">Best Quality</p>
                    <p className="mb-0">Ideal for high resolution displays</p>
                  </div>
                </label>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            md={4}
            sm={10}
            className="panel panel-default my-4 rounded shadow ms-md-1 p-4 my-sm-3"
          >
            <div className="panel-body">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="QualityRadio1"
                  id="QualityRadio2"
                />
                <label className="form-check-label" for="QualityRadio2">
                  <div className="formPanelContentContainer">
                    <p className="fw-bold mb-0">Small Quality</p>
                    <p className="mb-0">Ideal for display photos & uploading</p>
                  </div>
                </label>
              </div>
            </div>
          </Col>
          <Col lg={8} md={10} sm={10} className="mt-5">
            <Accordion flush className="rounded shadow">
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
