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
import fileSize from "filesize";
import axios from "axios";

//Api recieved meta data
var IMAGE_META_API_RESPONSE = new Array();

export default function ConvertImages() {
  const [imagesToBeUploaded, setImagesToBeUploaded] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null); // for image preview

  //States for parameters injection
  const [imageQuality, setImageQuality] = useState("best");

  //State to check Coversion status
  const [conversionPhases, setConversionPhases] = useState("Upload");

  //Accepted image types/formats
  const IMAGE_TYPES = [
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
    "image/webp",
    "image/jpg",
  ];

  const hiddenFileInput = useRef(null);
  const handleChooseFileBtn = (event) => {
    hiddenFileInput.current.click();
  };
  const handleFileInputChange = (e) => {
    var userInjectedFiles = []; // Initializaion for files initial injection
    var filesToBeUploaded = []; // Initializaion for files final injection

    console.log(filesToBeUploaded);
    if (e.target.files && e.target.files[0]) {
      userInjectedFiles.push(e.target.files);
      for (let i = 0; i < userInjectedFiles[0].length; i++) {
        filesToBeUploaded.push({
          name: userInjectedFiles[0][i].name,
          newName: null,
          type: userInjectedFiles[0][i].type,
          lastModified: userInjectedFiles[0][i].lastModified,
          size: userInjectedFiles[0][i].size,
          url: URL.createObjectURL(userInjectedFiles[0][i]),
          file: userInjectedFiles[0][i],
          uploadProgress: null,
          uploadError: null,
          uploadUrl: null,
          uploadTime: null,
          isConverted: false,
        });
      }
      setImagesToBeUploaded(filesToBeUploaded);
      console.log(filesToBeUploaded);
    }
  };
  const mapApiResponseToState = () => {
    let tempValue = null;
    tempValue = [...imagesToBeUploaded];
    for (var i = 0; i < imagesToBeUploaded.length; i++) {
      for (var j = 0; j < IMAGE_META_API_RESPONSE.length; j++) {
        if (imagesToBeUploaded[i].name === IMAGE_META_API_RESPONSE[j].name) {
          tempValue[i] = {
            ...tempValue[i],
            uploadUrl: IMAGE_META_API_RESPONSE[j].imagePath,
            uploadTime: IMAGE_META_API_RESPONSE[j].uploadTime,
            newName: IMAGE_META_API_RESPONSE[j].newName,
          };
          console.log(tempValue);
        }
      }
    }
    if (tempValue) {
      setImagesToBeUploaded(tempValue);
    }
  };
  const uplaodImage = async () => {
    if (imagesToBeUploaded.length == 0) {
      return false;
    }
    setConversionPhases("Uploading");
    for (var i = 0; i < imagesToBeUploaded.length; i++) {
      const IMAGE = imagesToBeUploaded[i].file;
      const formData = new FormData();
      formData.append("image", IMAGE);
      try {
        let res = await axios.post("/api/upload-images", formData, {
          onUploadProgress: function (progressEvent) {
            const uploadProgressCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(uploadProgressCompleted);
            let tempValue = [...imagesToBeUploaded];
            tempValue[i] = {
              ...tempValue[i],
              uploadProgress: uploadProgressCompleted,
            };
            setImagesToBeUploaded(tempValue);
          },
        });
        console.log(res);
        IMAGE_META_API_RESPONSE.push({
          name: res.data.name,
          imagePath: res.data.imagePath,
          uploadTime: res.data.uploadTime,
          newName: res.data.newName,
        });
      } catch (error) {
        console.log("❌ Error while posting image: ", error);
        let tempValue = [...imagesToBeUploaded];
        tempValue[i] = {
          ...tempValue[i],
          uploadError: true,
        };
        setImagesToBeUploaded(tempValue);
      }
    }
    mapApiResponseToState();
    setConversionPhases("Convert");
  };
  const removeImage = (key) => {
    setImagesToBeUploaded(
      imagesToBeUploaded.filter(function (image) {
        return image.url !== key;
      })
    );
  };
  const clearImagesState = () => {
    setImagesToBeUploaded(null);
    setConversionPhases("Upload");
  };
  const convertImages = async () => {
    console.log("Conversion Initiated");
    setConversionPhases("Converting...");
    for (var i = 0; i < imagesToBeUploaded.length; i++) {
      console.log(imagesToBeUploaded[i].uploadUrl);
      let res = await axios.get("/api/convert-images", {
        params: {
          fileName: imagesToBeUploaded[i].newName,
          imageUrl: imagesToBeUploaded[i].uploadUrl,
          conversionQuality: imageQuality,
          conversionFormat: ".jpeg",
        },
      });
      console.log(res);
    }
    setConversionPhases("Converted!");
  };
  const StartConversion = () => {
    if (conversionPhases == "Upload") {
      uplaodImage();
    } else {
      convertImages();
    }
  };

  useEffect(() => {
    if (imagesToBeUploaded?.length == 0) {
      setConversionPhases("Upload");
    }
  }, [imagesToBeUploaded]);

  useEffect(() => {
    if (conversionPhases == "Converted!") {
      clearImagesState();
    }
  }, [conversionPhases]);

  return (
    <section className="Images-converter-container">
      {/* <img src={createObjectURL} />*/}
      <Container>
        <Row className="justify-content-center align-items-center py-4">
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
                    className="d-flex flex-row justify-content-center align-items-center px-5"
                  >
                    <BiImageAdd size={50} color="black" />
                    <h4 className="m-0">Choose file</h4>
                  </Button>
                  <input
                    type="file"
                    accept={IMAGE_TYPES}
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
          {/* Start Image containers when user uploads images */}
          {imagesToBeUploaded ? (
            <Col lg={8} md={10} sm={10} className="mt-3">
              <div id={styles.ImagesContainerStack}>
                {imagesToBeUploaded.map((image) => {
                  return (
                    <div className="Images-placeholder" key={image.name}>
                      <ImageContainer
                        imageName={image.name}
                        imageSize={fileSize(image.size)}
                        imageUrl={image.url}
                        removeImage={removeImage}
                        uploadProgress={image.uploadProgress}
                        uploadError={image.uploadError}
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          ) : (
            ""
          )}

          {/* End Image containers when user uploads images */}
          <Col lg={8} md={10} sm={10} className="my-4">
            <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
              <p className="me-md-4 mb-0 mb-sm-2 text-left fs-6">
                <b>Note:</b> We only store you image for the life span of
                coversion, when images are converted they are automatically
                deleted from our database.
              </p>
              <button
                disabled={
                  imagesToBeUploaded &&
                  imagesToBeUploaded?.length > 0 &&
                  conversionPhases != "Uploading" &&
                  conversionPhases != "Converting..." &&
                  conversionPhases != "Converted!"
                    ? false
                    : true
                }
                onClick={StartConversion}
                className="btn btn-primary fs-4 d-flex flex-row justify-content-between align-items-center"
              >
                {" "}
                <CgArrowsExchangeAlt size={35} />
                {conversionPhases}
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
                  checked={imageQuality === "best"}
                  onChange={() => setImageQuality("best")}
                />
                <label className="form-check-label" htmlFor="QualityRadio1">
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
                  checked={imageQuality === "small"}
                  onChange={() => setImageQuality("small")}
                />
                <label className="form-check-label" htmlFor="QualityRadio2">
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
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
