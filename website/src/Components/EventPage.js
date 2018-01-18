import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

import "../../node_modules/animate.css/animate.min.css";
import "../App.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
var recievedMessage;

class EventPage extends Component {
  chooseCorpus = () => {
    if (this.props.location.state.title == "DAY OF HEALING") {
      return (
        <div>
          <h4 className="eventLogistics">
            Friday April 27th 11am-3pm | Amphitheater and garden 1 Rain location
            is Newcomb gallery
          </h4>
          The Day of Healing will include activities to encourage positive
          self-care, self-recognition, as well as physical and emotional relief
          from the experiences held from the past month. We encourage everyone
          to pop in and stay as long as they please. We’ll have various tables
          of activities as well as two self-care themed baskets that people can
          enter into raffles for using tickets they will receive at the other
          events throughout the month.
        </div>
      );
    } else if (this.props.location.state.title == "SILENCED VOICES") {
      return (
        <div>
          <h4 className="eventLogistics">
            April 12th 3:30 - 6:30 | Nau Hall 101
          </h4>
          This event will have student speakers from various CIOS, as well Dr.
          Douglas Meyer from the WGS department to speak on the issue of sexual
          assault in the LGBTQ+ community. How do we talk about sexual assault
          when it concerns the queer community? What are we doing for voices
          that aren't heard? This panel will also include a performance from the
          Harmonious Hoos.
        </div>
      );
    } else if (this.props.location.state.title == "LOVE SHOULDN'T HURT") {
      return (
        <div>
          <h4 className="eventLogistics">
            April 18th | 4:30-7:30 in Newcomb Gallery.
          </h4>
          The Love Shouldn’t Hurt event is an event focusing on relationship
          violence, where we will delve into the dangers and red flags of
          relationship violence. The event is to help those to recognize the
          signs of unhealthy and violent relationships and present people with
          resources to help and support them. During the event, organizations
          such as the One Love Foundation, Green Dot, and the Women’s Resource
          Center will present what people should be aware of in dangerous
          relationships as well as ways in which to help someone in need. The
          event and presentations will be held in the Newcomb Gallery on April
          18th.
        </div>
      );
    } else if (this.props.location.state.title == "VIGIL") {
      return (
        <div>
          <h4 className="eventLogistics">TBA</h4>
          The candlelight vigil is known around the country as one of the most
          common and recognisable events of Take Back the Night. As a night to
          shine through the darkness, it serves as a reminder of light and hope
          during a week filled with emotions. It's a time where hopefully, the
          entire community can come together for survivors, friends, and allies
          alike to share experiences and support each other. The night will be
          studded with acapella performances from fellow Hoos.
        </div>
      );
    } else if (this.props.location.state.title == "HACK-A-THON") {
      return (
        <div>
          <h4 className="eventLogistics">TBA</h4>
          The TBTN Hackathon is a 24-hour period where you can team up with as
          many as four people to create a project -- such as an app -- technical
          or otherwise. These projects are heavily encouraged to be themed
          around sexual assault prevention. All skill levels and genders are
          welcome and all you will need is a computer, sleeping bag, and maybe
          an idea or two! We will have student-led and company-led workshops to
          improve your tech skills. At the end of the night we will have a demo
          fair for the finished product or prototype where you pitch to judges.
          Awards will be given to the best teams that meet certain categories
          (overall best, social good, most creative, etc.). Again, you don’t
          have to know any computer science! Free food will be provided!
        </div>
      );
    } else if (this.props.location.state.title == "LEGACY OF SALLY HEMMINGS") {
      return (
        <div>
          <h4 className="eventLogistics">TBA</h4>
          TODO
        </div>
      );
    } else if (this.props.location.state.title == "POLICY BREAKDOWN") {
      return (
        <div>
          <h4 className="eventLogistics">TBA</h4>
          TODO
        </div>
      );
    } else if (this.props.location.state.title == "LIFTING THE SHADES") {
      return (
        <div>
          <h4 className="eventLogistics">TBA</h4>
          TODO
        </div>
      );
    }
  };
  render() {
    if (this.props.loading) {
      return;
    }
    return (
      <div className="eventPage">
        <h1 className="eventPageHeader">{this.props.location.state.title}</h1>
        <p className="eventPageContent">{this.chooseCorpus()}</p>
        <div className="eventPageBack">
          <RouterLink to="/">
            <h2>Back</h2>
          </RouterLink>
        </div>
      </div>
    );
  }
}
export default EventPage;
