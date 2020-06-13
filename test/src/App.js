import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Carousel, Col, Container, Row,} from "react-bootstrap";

export default function App() {
  return (
      <Container fluid>
          <Row>
              <Col xs={12}>
                  <Carousel controls={false} ride={false}>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="Assets/img/photo_place.png"
                              alt="First slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="Assets/img/photo_place.png"
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="Assets/img/photo_place.png"
                              alt="Third slide"
                          />
                      </Carousel.Item>
                  </Carousel>
              </Col>
          </Row>
      </Container>
  );
}