import React, { Component } from "react";
import "./Map.css";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitals: [
        "Utah Valley Hospital",
        "Utah State Hospital",
        "University of Utah Hospital",
        "Timpanogos Regional Hospital",
      ],
    };
  }
  render() {
    const options = this.state.hospitals.map((hospital) => {
      return { name: hospital, value: hospital };
    })
    return (
      /* <select className="hospitals" id="hospitals">
        {this.state.hospitals.map((hospital, i) => (
          <option value="all types" key={`hospital-${i}`}>
            {hospital}
          </option>
        ))}
      </select> */

      <div>
        <SelectSearch
          options={options}
          search
          emptyMessage="Not found"
          placeholder="Select your country..."
        />
      </div>
    );
  }
}

export default Map;
