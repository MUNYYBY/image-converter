import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import styles from "./converting-phase.module.css";
import { BiBadgeCheck } from "react-icons/bi";

export default function ConvertingPhase(props) {
  return (
    <div className="Converting-your-images justify-content-center align-items-center py-4">
      <Container>
        <Row className="justify-content-center align-items-center py-4">
          <Col lg={6} sm={10}>
            <div id={styles.ConversionPit} className="w-100">
              {props.conversionPhases != "Converted!" ? (
                <>
                  <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Converting...</span>
                  </Spinner>
                  <h4 className="mt-4">Converting...</h4>
                  <p>{props.conversionStatus.fileName}</p>
                </>
              ) : (
                <>
                  <BiBadgeCheck color="black" size={80} />
                  <h5 className="text-center">
                    Sucessfully Converted all the Images!
                  </h5>
                </>
              )}
            </div>
          </Col>
          <Col
            lg={2}
            sm={10}
            className="d-flex flex-direction-column justify-content-center align-items-center mt-4 mt-lg-0"
          >
            <Button
              disabled={props.conversionPhases != "Converted!"}
              onClick={() => props.setConversionPhases("Upload")}
            >
              Convert More Images?
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
