import React, { Component } from "react";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";


class Donation extends Component {
    constructor(props){
        super(props)
        this.state = {
            restaurants: ["pizza", "burgers", "tacos", "sandwiches"]
        }
    }
  render() {
    const options = this.state.restaurants.map((restaurant) => {
      return { name: restaurant, value: restaurant };
    })
    return (
      <div>
           <SelectSearch 
          options={options}
          search
          emptyMessage="Not found"
          placeholder="Select your food..."
        />
        <div><input type="number"/></div>
        <button>Donate!</button>
      </div>
    );
  }
}

export default Donation