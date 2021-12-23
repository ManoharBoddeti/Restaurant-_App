import React, { Component } from "react";
// import Items from "./Items";
import Counter from "./Counter";

export class Bill extends Component {
  render() {
    const { selectedItems, onCountChange, onInputvalueUpdate } = this.props;
    // console.log("selectedItems", selectedItems);
    return (
      <div>
        <h1 className="Navbar">MyCart</h1>
        <table class="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Items</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{item.ItemName}</td>
                <td>
                  <Counter
                    id={item.id}
                    quantity={item.quantity}
                    onCountChange={onCountChange}
                    onInputvalueUpdate={onInputvalueUpdate}
                  />
                </td>
                <td>&#8377; {item.quantity * item.price}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Bill;
