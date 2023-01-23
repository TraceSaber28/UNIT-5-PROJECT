import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>Official Name: {currentDisplay.name.official}</h1>
      <h2>Common Name: {currentDisplay.name.common}</h2>

      <table className="overview-table">
        <tr>
          <td> Capital: </td>
          {currentDisplay.capital.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td> Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
