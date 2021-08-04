// import React, {useEffect} from 'react';
// import { SolarBuddhica }  from '../data/solarBuddhica';
// import {useDispatch, useSelector} from 'react-redux'
// import {getSolarBuddhicaAction} from '../Redux/Action/getData-action';
// import BarChart_producers from './BarChart_producers';
// import TextInfo from './TextInfo/TextInfo';

// export default function SolarBuddhicaResult() {
//     const dispatch = useDispatch();
//     const {allSolarBuddhicaData} = useSelector(state => state.dataReducer)
//     let count = 0
//     let kysArray = []
//     let HyksArray = []
//     let TyksArray = []
//     let OysArray = []
//     let TaysArray = []
//     let receivedVaccineArray = []
//     let VaccineName = ''


//     useEffect(() => {
//        try {
//         fetchData(SolarBuddhica)
//        } catch (error) {
//            console.log('there is an error fetching the data', error)
//        }
//     }, [])

//     const fetchData = (SolarBuddhica) => {
//         dispatch(getSolarBuddhicaAction(SolarBuddhica))
        
//     }

//     const fetchOrderedData = () =>  {
//         return allSolarBuddhicaData.map((item, index)=> {
//         if(item.vaccine === 'SolarBuddhica') {
//             VaccineName = 'SolarBuddhica'
//         }
//         if(item.healthCareDistrict === 'KYS') {
//            count += 1;
//            kysArray.push(`${count},`)
//         } else if (item.healthCareDistrict === 'HYKS') {
//             count += 1;
//             HyksArray.push(`${count},`)
//         } else if (item.healthCareDistrict === 'TYKS'){
//             count += 1;
//             TyksArray.push(`${count},`)
//         } else if (item.healthCareDistrict === "TAYS") {
//             count += 1;
//             TaysArray.push(`${count},`);
//         }
//         else {
//             count += 1;
//             OysArray.push(`${count},`)
//         }
//     })}
//     fetchOrderedData()

//     const fetchReceivedVaccine = () => {
//         allSolarBuddhicaData.map((item)=> {
//            const getDate = item.arrived;
//            const nowDate = Date();
//            if (nowDate >= getDate) {
//                count += 1;
//                receivedVaccineArray.push(`${count},`);
//            }
//        })
//    }
//    fetchReceivedVaccine()

//     return (
//         <>
//            <div className="col-12 vaccinationResult">
//             <TextInfo receivedVaccineArray={receivedVaccineArray.length} 
//             dataLength={allSolarBuddhicaData.length} 
//             VaccineName={VaccineName} 
//             kysArray={kysArray.length} 
//             HyksArray={HyksArray.length} 
//             TyksArray={TyksArray.length} 
//             OysArray={OysArray.length}
//             TaysArray={TaysArray.length}/>

//             <BarChart_producers kysArray={kysArray.length} 
//             HyksArray={HyksArray.length} 
//             TyksArray={TyksArray.length} 
//             OysArray={OysArray.length}
//             TaysArray={TaysArray.length}/>
//             </div>
//         </>
//     )
// }
