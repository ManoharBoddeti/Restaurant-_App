import React, { Component } from "react";
import Items from "./Items";

export class Bill extends Component {
  render() {
    return (
      <div>
        <h1 className="Navbar">Bill</h1>
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bill;
