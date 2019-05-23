import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "../../node_modules/animate.css/animate.min.css";
import "../App.css";
import schedule from "../images/tbtnSchedule.jpg";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="aboutHeader"> About Take Back the Night </h1>
        <img className="aboutImage" src={schedule} />
        <p className="aboutDescription">
          <b>Take Back the Night</b> is an international event that has the
          primary goal of ending sexual assault in all forms. The earliest Take
          Back the Night events took place in the United States during the late
          seventies. Hundreds of events are held in over thirty countries
          annually. To this day, Take Back the Night events are recognized and
          hailed for being{" "}
          <b>
            safe spaces for anyone who has experienced, been affected by, or
            wants to end sexual violence.
          </b>
          Take Back the Night events held at the <b>University of Virginia </b>
          will be taking place during the month of <b>April, 2018.</b> Join us
          to take a stand and help end sexual violence.
        </p>
      </div>
    );
  }
}

export default About;
