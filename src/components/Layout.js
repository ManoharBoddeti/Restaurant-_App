import React, { Component } from "react";
import Menu from "./Menu";
import Items from "./Items";
import { Row, Col } from "react-bootstrap";
import "../App.css";
import Navbar from "./Navbar";
import MyCart from "./MyCart";

class Layout extends Component {
  //   {
  // "id": 2,
  // "ItemName": "Chilli Chicken",
  // "menu": 1,
  // "price": 250,
  // "quantity": 0
  // }
  state = {
    selectedId: "",
    selectedItemId: "",
    selectedItems: [],
  };
  onClick = (id) => {
    this.setState({ selectedId: id });
  };

  onSelectItem = (obj) => {
    const selectedIds = this.state.selectedItems.map((item) => item.id);
    // console.log(selectedIds);
    if (selectedIds.includes(obj.id)) {
      this.setState({
        selectedItems: this.state.selectedItems.map((item) => {
          if (item.id == obj.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        }),
      });
    } else {
      this.setState({
        selectedItems: [
          ...this.state.selectedItems,
          {
            ...obj,
            quantity: 1,
          },
        ],
      });
    }
  };

  onCountChange = (id, value, quantity) => {
    this.setState({
      selectedItems: this.state.selectedItems.map((item) => {
        // console.log("test98", value, item.quantity - 1);
        if (item.id == quantity) {
          return { ...item, quantity: Number(item.quantity) + Number(value) };
        } else return item;
      }),
    });
  };

  onInputvalueUpdate = (id, value) => {
    // if (value == 0) {
    //   this.setState({
    //     selectedItems: this.state.selectedItems.filter((item) => item.id != id),
    //   });
    // } else {
    this.setState({
      selectedItems: this.state.selectedItems.map((item, id) => {
        // id = { id };
        if (item.id == id) {
          return { ...item, quantity: Number(value) };
        } else return item;
      }),
    });
    // }
  };

  render() {
    return (
      <Row>
        <Navbar />
        <Col md={2}>
          <Menu onClick={this.onClick} />
        </Col>
        <Col md={6} className="img">
          <Items
            selectedId={this.state.selectedId}
            onSelectItem={this.onSelectItem}
          />
        </Col>
        <Col md={4}>
          <MyCart
            selectedItems={this.state.selectedItems}
            onCountChange={this.onCountChange}
            onInputvalueUpdate={this.onInputvalueUpdate}
          />
        </Col>
      </Row>
    );
  }
}

export default Layout;
