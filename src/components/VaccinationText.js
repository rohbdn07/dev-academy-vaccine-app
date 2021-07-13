import React from 'react';
import './style.css';

export default function VaccinationText(props) {
    const {totalVaccinationNumber, 
         totalFemaleTakenVaccine,
         totalMaleTakenVaccine, 
         totalNonBinaryTakenVaccine,
         totalAntiqueVaccineUsed,
         totalSolarBuddhicaVaccineUsed,
         totalZerpfyVaccineUsed } = props
    return (
      <>
             <div className="textInfo">     
                <ul className="list-group">
                    <p>Vaccination on the basis of <b>Gender</b>:</p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of male taken vaccine:
                        <span className="badge bg-success rounded-pill">{totalMaleTakenVaccine}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of female taken vaccine:
                        <span className="badge bg-primary rounded-pill">{totalFemaleTakenVaccine}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of non-binary taken vaccine:
                        <span className="badge bg-warning rounded-pill">{totalNonBinaryTakenVaccine}</span>
                    </li>
                    
                    <div>
                            <p>The total number of vaccination done are: <span class="badge fs-6 my-3 bg-info rounded-pill">{totalVaccinationNumber}</span></p>
                    </div>
                      
                </ul>
                <ul className="list-group">
                    <p>Vaccination on the basis of <b>Producer</b>:</p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of Antique vaccines used:
                        <span className="badge bg-success rounded-pill">{totalAntiqueVaccineUsed}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of SolarBuddhica vaccines used:
                        <span className="badge bg-primary rounded-pill">{totalSolarBuddhicaVaccineUsed}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    No. of Zerpfy vaccines used:
                        <span className="badge bg-warning rounded-pill">{totalZerpfyVaccineUsed}</span>
                    </li>
                    
                    <div>
                            <p>The total number of vaccination done are: <span class="badge fs-6 my-3 bg-info rounded-pill">{totalVaccinationNumber}</span></p>
                    </div>
                      
                </ul>
            </div>
      </>
    )
}
