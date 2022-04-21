import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

function Countries() {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(30);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

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
            <input
              type="radio"
              id={continent}
              checked={continent === selectedRadio}
              name="continentRadio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}> {continent} </label>
          </li>
        ))}
      </ul>

      {selectedRadio && (
        <button onClick={(e) => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio)) // 1st filter
          .sort((a, b) => b.population - a.population) // 2nd trier
          .slice(0, rangeValue) // 3rd cut
          .map((country, index) => (
            <Card key={index} country={country} /> // 4th display
          ))}
      </ul>
    </div>
  );
}

export default Countries;
