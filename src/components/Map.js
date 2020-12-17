import React, { Component } from "react";
import "./Map.css";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donated: 0,
      donate: false,
      hospitals: [
        "Utah Valley Hospital",
        "Utah State Hospital",
        "University of Utah Hospital",
        "Timpanogos Regional Hospital",
        "American Fork Hospital",
        "Heber Valley Hospital",
      ],
    };
  }
  render() {
    const options = this.state.hospitals.map((hospital, index) => {
      return { name: hospital, value: index };
    });

    return (
      /* <select className="hospitals" id="hospitals">
        {this.state.hospitals.map((hospital, i) => (
          <option value="all types" key={`hospital-${i}`}>
            {hospital}
          </option>
        ))}
      </select> */

      <div>
        <div>
          <button
            id="hamburger-menu"
            data-toggle="ham-navigation"
            class="hamburger-menu-button"
          >
            <span class="hamburger-menu-button-open">Menu</span>
          </button>
          <nav id="ham-navigation" class="ham-menu">
            <ul class="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="searchbar">
          <SelectSearch
            onChange={(event) => {
              this.setState({
                donate: true,
              });
            }}
            options={options}
            search
            emptyMessage="Not found"
            placeholder="Select your hospital..."
          />
          {this.state.donate && (
            <React.Fragment>
              <input
                type="number"
                className="inputbox"
                onChange={(event) => {
                  this.setState = {
                    donated: event.target.value,
                  };
                }}
              />
              <button className="donatebutton">Donate!</button>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Map;
