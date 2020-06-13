import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, Carousel, Col, Container, Row,} from "react-bootstrap";

export default function App() {
  return (
      <Container fluid>
          <Row>
              <Col xs={12} className="p-0">
                  <Carousel className="bg-info h-100" controls={false}>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="photo_place.png"
                              alt="First slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="photo_place.png"
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="photo_place.png"
                              alt="Third slide"
                          />
                      </Carousel.Item>
                  </Carousel>
                  <Card className="border_t_r-20 margin_t-20 border-0 bg-white">
                      <Card.Body>
                          <Card.Title>
                              <span className="material-icons align-middle text-primary f_s-20 pr-2">check_circle</span>
                              <span className="font-weight-bold align-middle">Nastya, 29</span>
                              <span className="material-icons align-middle text-success f_s-10 pl-2">fiber_manual_record</span>
                          </Card.Title>
                          <Card.Text>
                              I think I've told everything about myself.
                              I do not think my life is boring because every day confronted with something new and interesting for me
                          </Card.Text>
                          <div>
                              <button className="btn border-0 border_r-8 bg-primary m-2">
                                  <i className="icon-vector align-middle"></i>
                                  <span className="text-white">7'0.7'</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-weight align-middle"></i>
                                  <span className="text-color-custom">132 lbs</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-body-type align-middle"></i>
                                  <span className="text-color-custom">Slim</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-hair-color align-middle"></i>
                                  <span className="text-color-custom">Blonde</span>
                              </button>
                          </div>
                          <Card.Text className="font-weight-bold">
                              Extend Info
                          </Card.Text>
                          <div>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-christianity align-middle"></i>
                                  <span className="text-color-custom">Christianity</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-smoking align-middle"></i>
                                  <span className="text-color-custom">I do not smoke</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-free align-middle"></i>
                                  <span className="text-color-custom">Is free</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-socialy align-middle"></i>
                                  <span className="text-color-custom">Socialy</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-adults align-middle"></i>
                                  <span className="text-color-custom">Already adults</span>
                              </button>
                              <button className="btn border-0 border_r-8 bg-grey m-2">
                                  <i className="icon-sex align-middle"></i>
                                  <span className="text-color-custom">Bisexual</span>
                              </button>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
  );
}