import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import styles from "./converting-phase.module.css";

export default function ConvertingPhase() {
  return (
    <div className="Converting-your-images justify-content-center align-items-center py-4">
      <Container>
        <Row className="justify-content-center align-items-center py-4">
          <Col lg={6} sm={10}>
            <div id={styles.ConversionPit} className="w-100">
              <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Converting...</span>
              </Spinner>
              <h4 className="mt-4">Converting...</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
