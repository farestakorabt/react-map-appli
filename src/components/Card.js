import React from "react";

function Card(props) {
  // console.log(props);
  return (
    <li className="card">
      <img
        src={props.country.flags.svg}
        alt={"drapeau de " + props.country.translations.fra.common}
      />
      <div className="infos">
        {props.country.name.common}
        <h4>{props.country.capital}</h4>
        <p>Pop. {props.country.population.toLocaleString()}</p>
      </div>
    </li>
  );
}

export default Card;
