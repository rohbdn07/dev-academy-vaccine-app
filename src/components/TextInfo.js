import React from 'react';
import './style.css';


export default function TextInfo(props) {
    const {receivedVaccineArray, VaccineName, kysArray, HyksArray, TyksArray, OysArray, dataLength} = props;
    // const {allAntiquaData, allSolarBuddhicaData} = useSelector(state => state.dataReducer)
    return (
      <>
            <div className="textInfo">     
                <ul className="list-group">
                    <p>Vaccine name:<b>{VaccineName}</b></p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by KYS:
                        <span className="badge bg-dark rounded-pill">{kysArray}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by HYKS:
                        <span className="badge bg-success rounded-pill">{HyksArray}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by TYKS:
                        <span className="badge bg-primary rounded-pill">{TyksArray}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by OYS:
                        <span className="badge bg-danger rounded-pill">{OysArray}</span>
                    </li>
                    
                    <div>
                            <p>The total ordered {VaccineName} vaccine are : <span class="badge fs-6 my-3 bg-info rounded-pill">{dataLength}</span></p>
                            <p>The total received {VaccineName} vaccine until today are : <span class="badge fs-6 bg-info rounded-pill">{receivedVaccineArray}</span></p>                            
                    </div>
                      
                </ul>
            </div>
      </>
    )
}
