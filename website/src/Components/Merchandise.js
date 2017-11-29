import React, { Component } from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "../../node_modules/animate.css/animate.min.css";
import "../App.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Merchandise extends Component {
  render() {
    return (
      <div className="merchandise">
        <h1 className="merchandiseHeader">Tabling and Merchandise</h1>
        <Row>
          <Col md={6}>
            <p className="merchandiseDescription">
              Members of various Take Back the Night committees will be tabling
              on both South Lawn and the Whispering Wall through Monday, April
              17th to Thursday, April 20th. Tabling will run through 10:00 am to
              2:00 pm at both locations. Each location will be selling Take Back
              the Night t-shirts for $10, handing out free stickers, selling
              Gala tickets for $5, and providing information on each Take Back
              the Night event. We highly encourage all those interested in
              learning more about the events and purchasing merchandise stop by!
            </p>
            <p>pictured: shirt and sticker design</p>
          </Col>
          <Col md={6}>
            <img
              className="merchandiseImg2"
              src="https://static.wixstatic.com/media/ba5d01_2eee984ee4a049428a8f7406b8771293~mv2.jpg/v1/fill/w_462,h_462,al_c,q_80,usm_0.66_1.00_0.01/ba5d01_2eee984ee4a049428a8f7406b8771293~mv2.webp"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img
              className="merchandiseImg1"
              src="https://static.wixstatic.com/media/ba5d01_a968acdaf2f3446d9463a1a98b1393cb~mv2.png/v1/fill/w_900,h_408,al_c/ba5d01_a968acdaf2f3446d9463a1a98b1393cb~mv2.png"
            />
          </Col>
        </Row>
      </div>
    );
  }
}
//https://www.iconfinder.com/editor/?id=183493&size=512&hash=55add0366a0182ae31139594565ff00b9692d92b3baaa1468e5e54f6d
export default Merchandise;
