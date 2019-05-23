import React, { Component } from "react";
import "../App.css";

import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import { Route, BrowserRouter as Router } from "react-router-dom";
import t from "../images/Social-Media-Icons/facebook.png";
import rotunda from "../images/sponsors/rotundaLogo.jpg";
import wc from "../images/sponsors/womensCenter.jpg";
import honor from "../images/sponsors/honor.jpg";

class Sponsors extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="Projects">
          <h1 className="Projects-Header"> OUR SPONSORS </h1>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Sponsors-img" src={rotunda} />
              <h2>UVA TITLE IX OFFICE</h2>
              <h4>
                email: TitleIXCoordinator@virginia.edu | phone: (434) 297-7988
              </h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Sponsors-img" src={wc} />
              <h2>THE WOMEN'S CENTER</h2>
              <h4>
                email: womenscenterservices@virginia.edu | phone: 434-982-2361
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={6}>
              <img className="Sponsors-img" src={rotunda} />
              <h2>THE SEXUAL VIOLENCE PREVENTION COALITION</h2>
              <h4>email: SVPCatUVA@gmail.com</h4>
            </Col>
            <Col className="Projects-Project" sm={6}>
              <img className="Sponsors-img" src={honor} />
              <h2>HONOR COMMITTEE</h2>
              <h4>site: honor.virginia.edu | phone: (434) 924-7602</h4>
            </Col>
          </Row>
          <Row>
            <Col className="Projects-Project" sm={12}>
              <hr />
              <h2>
                Thank you to all of the groups and businesses who donated items
                for the 2018 Day of Healing raffle!
              </h2>
              <h4>
                Charlottesville Cooking School <br />
                Corner Juice<br />
                Crossfit Charlottesville<br />
                Elderberry Herbals<br />
                Firefly<br />
                Grit Coffee<br />
                Hoos in Treble (HIT)<br />
                Hullabahoos<br />
                Iron Paffles and Coffee<br />
                KIND<br />
                Muse Paint Bar<br />
                ODOS / Dean Groves<br />
                Paragon Day Spa<br />
                Rethreads<br />
                Rock, Paper, Scissors<br />
                Signature Medical Spa<br />
                Simply Yoga<br />
                Snowing in Space<br />
                Sprint Pavilion<br />
                UVA Baseball<br />
                UVA Football <br />
                UVA Ice Hockey<br />
                UVA Men’s Basketball <br />
                UVA Women’s Basketball<br />
                Wegmans <br />
              </h4>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Sponsors;
