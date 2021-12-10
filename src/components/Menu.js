import React, { Component } from "react";
import Dish from "../data/Dish.json";

export class Menu extends Component {
  render() {
    return (
      <div>
        <h1 className="Navbar">Menu</h1>
        <div>
          {Dish.map((data, id) => {
            return (
              <div
                className="menu"
                id={id}
                onClick={() => this.props.onClick(data.id)}
              >
                <h5>{data.Menu}</h5>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
