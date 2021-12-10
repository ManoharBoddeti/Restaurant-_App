import React, { Component } from "react";
import Menu from "./Menu";
import Items from "./Items";
import Bill from "./Bill";
import { Row, Col } from "react-bootstrap";
import "../App.css";
import Navbar from "./Navbar";

class Layout extends Component {
  state = {
    selectedId: "",
  };
  onClick = (id) => {
    this.setState({ selectedId: id });
  };

  render() {
    return (
      <Row>
        <Navbar />
        <Col md={2}>
          <Menu onClick={this.onClick} />
        </Col>
        <Col md={6} className="img">
          <Items selectedId={this.state.selectedId} />
        </Col>
        <Col md={4}>
          <Bill />
        </Col>
      </Row>
    );
  }
}

export default Layout;
