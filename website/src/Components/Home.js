import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import Event from "./Event.js";
import Merchandise from "./Merchandise.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Sponsors from "./Sponsors.js";
import EventPage from "./EventPage.js";
import Facebook from "../images/Social-Media-Icons/facebook.png";

import "../../node_modules/animate.css/animate.min.css";
import "../App.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Home extends Component {
  render() {
    return (
      <div>
        <ScrollAnimation animateIn="fadeIn" animateOnce>
          <div className="headerImage">
            <div className="navBar">
              <Row>
                <Col md={1} />
                <Col md={2}>
                  <Link
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div className="navBarItem">ABOUT</div>
                  </Link>
                </Col>
                <Col md={2}>
                  <Link
                    activeClass="active"
                    to="Merchandise"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div className="navBarItem">TABLING</div>
                  </Link>
                </Col>
                <Col md={2}>
                  <Link
                    activeClass="active"
                    to="Event"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div className="navBarItem">EVENTS</div>
                  </Link>
                </Col>
                <Col md={2}>
                  <Link
                    activeClass="active"
                    to="Sponsors"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div className="navBarItem">SPONSORS</div>
                  </Link>
                </Col>
                <Col md={2}>
                  <Link
                    activeClass="active"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <div className="navBarItem">CONTACT US</div>
                  </Link>
                </Col>
                <Col md={1} />
              </Row>
            </div>
            <ScrollAnimation animateIn="fadeIn" delay={1000}>
              <div className="title">
                <b>
                  TAKE BACK THE NIGHT<br />2018
                </b>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
        <Element name="About">
          <About />
        </Element>
        <div className="breakImage" />
        <Element name="Merchandise">
          <Merchandise />
        </Element>
        <Element name="Event">
          <Event />
        </Element>
        <Element name="Sponsors">
          <Sponsors />
        </Element>
        <div className="breakImage" />
        <Element name="Contact">
          <Contact />
        </Element>
        <div className="footer">
          <div className="footerInfo">Follow Us on Facebook!</div>
          <a href="https://www.facebook.com/uvatbtn/">
            <img className="footerFacebook" src={Facebook} />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
