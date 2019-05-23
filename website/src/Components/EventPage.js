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
            April 27 10-2pm | Amphitheater and Garden I; rain location Open
            Grounds and 1515 Studio
          </h4>
          The Day of Healing will include activities to encourage positive
          self-care, self-recognition, as well as physical and emotional relief
          from the experiences held from the past month. We encourage everyone
          to pop in and stay as long as they please. We’ll have various tables
          of activities as well as various self-care and wellness themed baskets
          that people can enter into raffles for using tickets they will receive
          at the other events throughout the month.
        </div>
      );
    } else if (this.props.location.state.title == "SILENCED VOICES") {
      return (
        <div>
          <h4 className="eventLogistics">April 12 4-5pm | Minor 125</h4>
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
            April 18 4:30-7:30pm | Newcomb Gallery
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
          <h4 className="eventLogistics">April 4 8-10pm | Sprint Pavilion</h4>
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
          <h4 className="eventLogistics">
            April 21 9am-April 22 2pm | Newcomb Commonwealth
          </h4>
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
          <h4 className="eventLogistics">April 9 and 10th 5:30 pm | Nau 101</h4>
          The Legacy of Sally Hemmings captures every facet of the human
          condition. Launching off with the Hemmings descendants discussing
          their legacy present day, a panel of scholars discussing the
          implications of slave labor at UVa as well as Sally Hemmings legacy
          will follow. Wrapping things up on Day 1, a Q&A dialogue styled panel,
          comprised of a sexual assault resource worker, intersectionality
          professors, deans, and the Hemmings descendant will conclude.Day 2 of
          will be an artistic day of healing, including live female
          performances, an open mic, and stations of tactile healing. The event
          will be in Nau 101 on April 9+10, beginning at 6 PM. More information
          to come from the chair, Danya Abutaleb, who can be contacted at
          da4bx@virginia.edu
        </div>
      );
    } else if (this.props.location.state.title == "POLICY BREAKDOWN") {
      return (
        <div>
          <h4 className="eventLogistics">April 17 6-8pm | Newcomb Gallery</h4>
          This event gives individuals the unique opportunity to hear and follow
          each stage of the reporting process. The event consists of an overview
          of the reporting process and a panel of speakers will be discussing
          the nuances of the reporting process and their thoughts on the process
          from their respective roles. By the end of our discussion, we hope you
          can take away how to report, and what steps you should know when
          reporting, as well as your legal rights, both in the UVA process and
          the Legal Process.This event has been FOA approved by the Fraternity
          and Sorority Life Office. Pannelists:
          <ul>
            <li>
              Claire Kaplan | Director of Gender Violence and Social Change
              Program at the Women’s Center
            </li>
            <li>Sherri Moore | McIntire School of Commerce Professor</li>
            <li>
              Areshini Pather | Associate DA, Prosecutor, volunteer at the
              Shelter for Help in Emergency
            </li>
            <li>
              Emily Babb | Assistant Vice President for Title IX
              Compliance/Title IX Coordinator
            </li>
            <li>
              John Flood | Title IX Investigator, Former Police Officer and FBI
              Special Agent
            </li>
            <li>
              Kathryn Laughon | Sexual Assault Nurse Examiner (SANE) And
              Associate Professor of Nursing At the University of Virginia
            </li>
          </ul>
        </div>
      );
    } else if (this.props.location.state.title == "LIFTING THE SHADES") {
      return (
        <div>
          <h4 className="eventLogistics">
            April 25th 5:30-8pm | Newcomb South Meeting Room
          </h4>
          Lifting the Shades is going to be an event focused on having a
          discussion on the unique problems minority groups face with sexual
          assault. There will be a keynote speaker, a panel discussion with
          members of the UVA and Charlottesville community, and a follow up
          discussion over dinner about topics relevant to the issues, and ways
          we can combat those issues. This event is meant to be one of learning,
          respectful dialogue, unity, and healing.
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
