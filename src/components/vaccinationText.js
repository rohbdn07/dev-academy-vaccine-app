import React from 'react';
import './style.css';

export default function VaccinationText(props) {
    const {totalVaccinationNumber, totalFemaleTakenVaccine, totalMaleTakenVaccine, totalNonBinaryTakenVaccine} = props
    return (
      <>
             <div className="textInfo">     
                <ul className="list-group">
                    <p>Vaccination</p>
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
                        <span className="badge bg-danger rounded-pill">{totalNonBinaryTakenVaccine}</span>
                    </li>
                    
                    <div>
                            <p>The total number of vaccination done are: <span class="badge fs-6 my-3 bg-info rounded-pill">{totalVaccinationNumber}</span></p>
                    </div>
                      
                </ul>
            </div>
      </>
    )
}
