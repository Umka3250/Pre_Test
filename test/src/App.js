import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic_for_slider from '../src/assets/img/main_photo.jpg';

import {Card, Carousel, Col, Container, Row,} from "react-bootstrap";

export default function App() {
  return (
      <Container fluid>
          <Row>
              <Col xs={12} className="p-0">
                  <button className="border-0 rounded-circle back-btn">
                      <span className="mx-1 my-2 text-white align-middle material-icons">arrow_back</span>
                  </button>
                  <Carousel className="bg-info" controls={false}>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="First slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="First slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
                              alt="Third slide"
                          />
                      </Carousel.Item>
                      <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src={pic_for_slider}
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
                          <Card.Text className="text-muted f_s-16 mb-0">
                              I'm here...
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              To see what happens
                          </Card.Text>
                          <Card.Text className="text-muted f_s-16 mb-0">
                              Education
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              High school
                          </Card.Text>
                          <Card.Text className="text-muted f_s-16 mb-0">
                              Work
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              Journalist, best mom ever
                          </Card.Text>
                          <Card.Text className="text-muted f_s-16 mb-0">
                              Current location
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              5 ml away
                          </Card.Text>
                          <Card.Text className="text-muted f_s-16 mb-0">
                              Verification
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              <Row>
                                  <Col xs={2} className="pr-0">
                                      <span className="material-icons align-middle text-primary pr-2">check_circle</span>
                                  </Col>
                                  <Col xs={10} className="pl-0">
                                      <span className="align-middle">Nastya is photo-verified</span>
                                  </Col>
                              </Row>
                          </Card.Text>
                          <Card.Text className="text-muted f_s-16 mb-0">
                              Logged in
                          </Card.Text>
                          <Card.Text className="font-weight-bold f_s-20">
                              <Row>
                                  <Col xs={2} className="pr-0"><span className="icon-fb align-middle text-primary"></span></Col>
                                  <Col xs={10} className="pl-0"><span>Nastya logged in with  facebook</span></Col>
                              </Row>
                          </Card.Text>
                          <Row>
                              <Col xs="12">
                                  <button className="btn-border-report p-2 text-color-custom">Report abuse</button>
                              </Col>
                          </Row>
                          <Row>
                              <Col xs="12" className="text-center">
                                  <button className="m-3 p-3 border-0 rounded-circle btn-like"><span className="align-middle material-icons color-for-like-btn">favorite</span></button>
                              </Col>
                          </Row>
                      </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
  );
}