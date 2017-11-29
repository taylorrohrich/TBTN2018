import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import vigilBefore from "../images/eventStars/vigilBefore.png";

import "../../node_modules/animate.css/animate.min.css";
import "../App.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Event extends Component {
  render() {
    return (
      <div className="eventImage">
        <div className="event">
          <h1 className="eventHeader"> Events </h1>
          <Row>
            <Col md={3} />
            <Col md={3}>
              <div className="eventVigilImage" />
            </Col>
            <Col md={5} />
          </Row>
          <Row>
            <Col md={8} />
            <Col md={3}>
              <div className="eventHackImage" />
            </Col>
          </Row>
          <Row>
            <Col md={3} />
            <Col md={3}>
              <div className="eventHealImage" />
            </Col>
            <Col md={5} />
          </Row>
          <Row>
            <Col md={8} />
            <Col md={3}>
              <div className="eventLegacyImage" />
            </Col>
          </Row>
          <Row>
            <Col md={3} />
            <Col md={3}>
              <div className="eventLoveImage" />
            </Col>
            <Col md={5} />
          </Row>
          <Row>
            <Col md={8} />
            <Col md={3}>
              <div className="eventPolicyImage" />
            </Col>
          </Row>
          <Row>
            <Col md={3} />
            <Col md={3}>
              <div className="eventShadesImage" />
            </Col>
            <Col md={5} />
          </Row>
          <Row>
            <Col md={8} />
            <Col md={3}>
              <div className="eventSilencedImage" />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Event;
