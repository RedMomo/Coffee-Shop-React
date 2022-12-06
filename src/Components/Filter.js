import React from "react";
import ProductCard from "./ProductCard";

function Filter ({ onChangeType, onFindCoffeeClick }) {
        function handleChange(event) {
          onChangeType(event.target.value);
        }

        function onFindCoffeeClick() {
          // search by roast
        }
      
        return (
          <div className="ui form">
            <h3>Filter Coffee</h3>
            <div className="field">
              <select name="type" id="type" aria-label="type" onChange={handleChange}>
                <option value="all">All</option>
                <option value="dark">Dark</option>
                <option value="medium">Medium</option>
                <option value="light">Light</option>
                <option value="blend">Blend</option>
              </select>
            </div>
      
            <div className="field">
              <button onClick={onFindCoffeeClick} className="ui secondary button">
                Filter
              </button>
            </div>
          </div>
        );
      }






export default Filter;