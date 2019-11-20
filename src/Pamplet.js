import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "./nathkrupa.jpeg";
import Gallery from "./components/Gallery/Gallery.js";
import "./App.css";

class Pamplet extends Component {
  render() {
    console.log(this.props);
    console.log(this.state);

    return (
      <div className="App">
        <header className="Preview-header">
          <Container>
            <Row>
              <Col xs={6} md={4}></Col> <Col xs={6} md={4}></Col>
              <Col xs={2} md={12}>
                <Image src={logo} className="" roundedCircle />
                <h1 className="Main-title">Nathkrupa Daily Fresh</h1>
                <h2 className="Main-title2">Fresh and Straight from farms to your Doorstep!!</h2>
                <h2>For Orders Please Reply via Whatsapp on +919970449991 </h2>
              </Col>
            </Row>
          </Container>

          <br />
        </header>
        <main className="App-body">
          <Gallery {...this.props} />
        </main>
        <footer>
          <div className="Footer-div">
            Designed By : https://techprehension.com : +919762124376{" "}
          </div>
        </footer>
      </div>
    );
  }
}

export default Pamplet;
