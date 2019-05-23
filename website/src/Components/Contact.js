import React, { Component } from "react";
import "../App.css";

import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import t from "../images/Social-Media-Icons/facebook.png";
import Garrison from "../images/profilePics/GarrisonGrow.jpg";
import Taylor from "../images/profilePics/TaylorRohrich.JPG";
import Emma from "../images/profilePics/EmmaTillitski.jpg";
import Amelia from "../images/profilePics/AmeliaWilt.jpg";
import Danya from "../images/profilePics/Danya.JPG";
import Sarah from "../images/profilePics/SarahNolan.jpg";
import Layla from "../images/profilePics/LaylaBryant.jpg";
import Hannah from "../images/profilePics/HannahLitkowski.jpg";
import Alex from "../images/profilePics/AlexSmith-Scales.jpg";
import Veronica from "../images/profilePics/VeronicaSirotic.jpeg";
import Shivani from "../images/profilePics/ShivaniNathan.jpg";
import Anna from "../images/profilePics/AnnaTaylor.png";
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="Projects">
          <h1 className="Projects-Header"> CONTACT US </h1>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Alex} />
              <h2>CO-CHAIR</h2>
              <h4>Alex Smith-Scales | cell: 804-513-1521</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Garrison} />
              <h2>CO-CHAIR</h2>
              <h4>Garrison Grow | cell: 215-375-6864</h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Emma} />
              <h2>VIGIL CHAIR</h2>
              <h4>Emma Tillitski | cell: 561-809-7848</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Shivani} />
              <h2>HACK-A-THON CHAIR</h2>
              <h4>Shivani Nathan | cell: 571-606-7138</h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Amelia} />
              <h2>DAY OF HEALING CHAIR</h2>
              <h4>Amelia Wilt | cell: 703-864-3522</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Danya} />
              <h2>LEGACY OF SALLY HEMMINGS CHAIR</h2>
              <h4>Danya Abutaleb | cell: 571-331-4055</h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Sarah} />
              <h2>LOVE SHOULDN'T HURT CHAIR</h2>
              <h4>Sarah Nolan | cell: 817-773-1922</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Layla} />
              <h2>POLICY BREAKDOWN CHAIR</h2>
              <h4>Layla Bryant | cell: 703-424-5782 </h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Anna} />
              <h2>LIFTING THE SHADES CHAIR</h2>
              <h4>Anna Taylor | cell: 804-441-0823</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Veronica} />
              <h2>SILENCED VOICES CHAIR</h2>
              <h4>Veronica Sirotic | cell: 571-969-8088</h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Taylor} />
              <h2>WEBSITE CHAIR</h2>
              <h4>Taylor Rohrich | cell: 972-743-2914</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Projects-img" src={Hannah} />
              <h2>PR CHAIR</h2>
              <h4>Hannah Litkowski | cell: 757-513-8875</h4>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Contact;
