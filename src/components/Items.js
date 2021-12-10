import React, { Component } from "react";
import items from "../data/items.json";

export default class Items extends Component {
  render() {
    const filterList = items.filter(
      (filterName) => filterName.menu === this.props.selectedId
    );
    return (
      <div>
        <div>
          <h1 className="Navbar">Items</h1>
          <div class="d-flex align-content-start  flex-wrap mb-1 ">
            {filterList.map((item, id) => (
              <div
                id={id}
                class="p-2  py-3 px-2 m-1 rounded"
                style={{ backgroundColor: "skyBlue" }}
                // onClick={this.onItem(id)}
              >
                {item.ItemName}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
