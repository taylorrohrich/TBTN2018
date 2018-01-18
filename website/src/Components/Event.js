import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

import vigilBefore from "../images/eventStars/vigilBefore.png";
import EventPage from "./EventPage.js";

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
          <h1 className="eventHeader">EVENTS</h1>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={2} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "VIGIL" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>VIGIL</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={7} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "HACK-A-THON" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>HACK-A-THON</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={2} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: {
                      title: "DAY OF HEALING"
                    }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>DAY OF HEALING</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={7} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "LEGACY OF SALLY HEMMINGS" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>LEGACY OF SALLY HEMMINGS</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={2} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "LOVE SHOULDN'T HURT" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>LOVE SHOULDN'T HURT</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={7} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "POLICY BREAKDOWN" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>POLICY BREAKDOWN</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={2} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "LIFTING THE SHADES" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>LIFTING THE SHADES</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce>
            <Row>
              <Col sm={0} md={7} />
              <Col sm={12} md={3}>
                <RouterLink
                  to={{
                    pathname: "/Event",
                    state: { title: "SILENCED VOICES" }
                  }}
                >
                  <div className="eventStarImage">
                    <h1>SILENCED VOICES</h1>
                  </div>
                </RouterLink>
              </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Event;
