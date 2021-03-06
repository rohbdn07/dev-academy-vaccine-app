import React from "react";
import PropsTypes from "prop-types";
import "../style.css";

export default function VaccinationText(props) {
    const {
        totalVaccinationNumber,
        totalFemaleTakenVaccine,
        totalMaleTakenVaccine,
        totalNonBinaryTakenVaccine,
        totalAntiqueVaccineUsed,
        totalSolarBuddhicaVaccineUsed,
        totalZerpfyVaccineUsed,
    } = props;

    return (
        <>
            <div className="textInfo">
                <ul className="list-group">
                    <p>
                        Vaccination on the basis of <b>Gender</b>:
                    </p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>No. of male taken vaccine:</p>
                        <span className="badge bg-success rounded-pill">
                            {totalMaleTakenVaccine}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p> No. of female taken vaccine:</p>
                        <span className="badge bg-primary rounded-pill">
                            {totalFemaleTakenVaccine}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>No. of non-binary taken vaccine:</p>
                        <span className="badge bg-warning rounded-pill">
                            {totalNonBinaryTakenVaccine}
                        </span>
                    </li>

                    <div>
                        <p>
                            The total number of vaccination done are:{" "}
                            <span class="badge fs-7 mt-3 bg-info rounded-pill">
                                {totalVaccinationNumber}
                            </span>
                        </p>
                    </div>
                </ul>
                <ul className="list-group">
                    <p>
                        Vaccination on the basis of <b>Producer</b>:
                    </p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p> No. of Antique vaccines used:</p>
                        <span className="badge bg-primary rounded-pill">
                            {totalAntiqueVaccineUsed}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p>No. of SolarBuddhica vaccines used:</p>
                        <span className="badge bg-success rounded-pill">
                            {totalSolarBuddhicaVaccineUsed}
                        </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <p> No. of Zerpfy vaccines used:</p>
                        <span className="badge bg-warning rounded-pill">
                            {totalZerpfyVaccineUsed}
                        </span>
                    </li>

                    <div>
                        <p>
                            The total number of vaccination done are:{" "}
                            <span class="badge fs-7 mt-3 bg-info rounded-pill">
                                {totalVaccinationNumber}
                            </span>
                        </p>
                    </div>
                </ul>
            </div>
        </>
    );
}

VaccinationText.PropsTypes = {
    totalVaccinationNumber: PropsTypes.number.isRequired,
    totalFemaleTakenVaccine: PropsTypes.number.isRequired,
    totalMaleTakenVaccine: PropsTypes.number.isRequired,
    totalNonBinaryTakenVaccine: PropsTypes.number.isRequired,
    totalAntiqueVaccineUsed: PropsTypes.number.isRequired,
    totalSolarBuddhicaVaccineUsed: PropsTypes.number.isRequired,
    totalZerpfyVaccineUsed: PropsTypes.number.isRequired,
};
