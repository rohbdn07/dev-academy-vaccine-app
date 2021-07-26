import React from "react";
import "../style.css";
import PropsTypes from "prop-types";

export default function TextInfo(props) {
  const {
    receivedVaccineArray,
    VaccineName,
    kysArray,
    HyksArray,
    TyksArray,
    OysArray,
    dataLength,
  } = props;

  return (
    <>
      <div className="textInfo">
        <ul className="list-group">
          <p>
            Vaccine name:<b>{VaccineName}</b>
          </p>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>The total vaccine ordered by KYS:</p>
            <span className="badge bg-dark rounded-pill">{kysArray}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>The total vaccine ordered by HYKS:</p>
            <span className="badge bg-success rounded-pill">{HyksArray}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
          <p> The total vaccine ordered by TYKS:</p>
            <span className="badge bg-primary rounded-pill">{TyksArray}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <p>The total vaccine ordered by OYS:</p>
            <span className="badge bg-danger rounded-pill">{OysArray}</span>
          </li>

          <div>
            <p className="pt-3">
              The total ordered {VaccineName} vaccine's bottles are:
              <span class="badge fs-7 bg-info rounded-pill">{dataLength}</span>
            </p>
            <p>
              The total received {VaccineName} vaccine's bottles are:
              <span class="badge fs-7 bg-info rounded-pill">
                {receivedVaccineArray}
              </span>
            </p>
          </div>
        </ul>
      </div>
    </>
  );
}

TextInfo.propTypes = {
  receivedVaccineArray: PropsTypes.number,
  VaccineName: PropsTypes.string,
  kysArray: PropsTypes.number,
  HyksArray: PropsTypes.number,
  TyksArray: PropsTypes.number,
  OysArray: PropsTypes.number,
  dataLength: PropsTypes.number,
};
