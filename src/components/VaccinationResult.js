import React, {useEffect} from 'react';
import { vaccination }  from '../data/vaccination';
import {useDispatch, useSelector} from 'react-redux';
import {getVaccinationAction} from '../Redux/Action/getData-action';
import VaccinationText from './vaccinationText';

export default function VaccinationResult() {
    const dispatch = useDispatch();
    const { allVaccinationData } = useSelector(state => state.dataReducer);
    let count = 0;
    let totalVaccinationNumber = [];
    let totalFemaleTakenVaccine = [];
    let totalMaleTakenVaccine = [];
    let totalNonBinaryTakenVaccine = []

    useEffect(() => {
       try {
        fetchData(vaccination)
       } catch (error) {
           console.log('there is an error fetching the data', error)
       }
    }, [])

    const fetchData = (vaccination) => {
        dispatch(getVaccinationAction(vaccination))
        
    }

    const fetchVaccination = () =>  {
        return allVaccinationData.map((item, index)=> {
           if (item) {
            count += 1;
            totalVaccinationNumber.push(`${count},`)
           }
           if(item.gender === 'female') {
            count += 1;
            totalFemaleTakenVaccine.push(`${count},`)

           } else if (item.gender === 'male') {
               count += 1;
               totalMaleTakenVaccine.push(`${count},`)
           } else {
               count += 1;
               totalNonBinaryTakenVaccine.push(`${count},`)
           }
    })}
    fetchVaccination()

//     const fetchReceivedVaccine = () => {
//         allZerpfyData.map((item)=> {
//            const getDate = item.arrived;
//            const nowDate = Date();
//            if (nowDate >= getDate) {
//                count += 1;
//                receivedVaccineArray.push(`${count},`);
//            }
//        })
//    }
//    fetchReceivedVaccine()

    return (
        <>
            <VaccinationText totalVaccinationNumber={totalVaccinationNumber.length} 
            totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
            totalMaleTakenVaccine={totalMaleTakenVaccine.length}
            totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length} />
        </>
    )
}
