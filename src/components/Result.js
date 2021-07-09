import React, {useEffect} from 'react';
import { antiquaData }  from '../data/antiqua';
import {useDispatch, useSelector} from 'react-redux'
import {getDataAction} from '../Redux/Action/getData-action';

export default function Result() {
    const dispatch = useDispatch();
    const {allData} = useSelector(state => state.dataReducer)
    let count = 0
    let kysArray = []
    let HyksArray = []
    let TyksArray = []
    let OysArray = []


    useEffect(() => {
       try {
        fetchdata(antiquaData)
       } catch (error) {
           console.log('there is an error fetching the data', error)
       }
    }, [])

    const fetchdata = (antiquaData) => {
        dispatch(getDataAction(antiquaData))
        
    }

    const fetchOrderedData = () =>  {
        return allData.map((item, index)=> {
        if(item.healthCareDistrict === 'KYS') {
           count += 1;
           kysArray.push(`${count},`)
        } else if (item.healthCareDistrict === 'HYKS') {
            count += 1;
            HyksArray.push(`${count},`)
        } else if (item.healthCareDistrict === 'TYKS'){
            count += 1;
            TyksArray.push(`${count},`)
        } else {
            count += 1;
            OysArray.push(`${count},`)
        }
    })}
    fetchOrderedData()

    return (
        <>
            <div>     
                <ul className="list-group">
                    <p>Vaccine name: Antiqua</p>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by KYS:
                        <span className="badge bg-primary rounded-pill">{kysArray.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by HYKS:
                        <span className="badge bg-primary rounded-pill">{HyksArray.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by TYKS:
                        <span className="badge bg-primary rounded-pill">{TyksArray.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                    The total vaccine ordered by OYS:
                        <span className="badge bg-primary rounded-pill">{OysArray.length}</span>
                    </li>
                    
                <div>
                        <p>The total ordered Antiqua vaccine are : <span class="badge bg-primary rounded-pill">{allData.length}</span></p>                
                </div>

                </ul>
            </div>
        </>
    )
}
