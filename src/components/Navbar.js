import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-skyblue">
          <div class="container-fluid">
            <a class="navbar-brand " href="#">
              FOODIE
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Menu
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Tables
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Invoice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
