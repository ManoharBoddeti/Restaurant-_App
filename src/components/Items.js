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
                className="p-2  py-3 px-2 m-1  item-click"
                onClick={() => this.props.onSelectItem(item)}
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
