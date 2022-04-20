import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europa", "Oceania"];

  // useEffect used when the component is mount (monté)
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent, index) => (
          <li key={index}>
            <input type="radio" id={continent} name="continentRadio" />
            <label htmlFor={continent}> {continent} </label>
          </li>
        ))}
      </ul>

      <ul>
        {data.slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
