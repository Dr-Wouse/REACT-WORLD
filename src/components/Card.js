import React from "react";

const Card = ({ country }) => {
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={country.flag} alt={country.name} />
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>Capital :{country.capital}</li>
          <li>Population : {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
