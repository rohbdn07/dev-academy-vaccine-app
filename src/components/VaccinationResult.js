import React, {useEffect} from 'react';
import { vaccination }  from '../data/vaccination';
import {useDispatch, useSelector} from 'react-redux';
import {getVaccinationAction} from '../Redux/Action/getData-action';
import VaccinationText from './VaccinationText';
import PieChart_vaccination from './PieChart_vaccination';
import './style.css';

export default function VaccinationResult() {
    const dispatch = useDispatch();
    const { allVaccinationData, allAntiquaData, allSolarBuddhicaData, allZerpfyData } = useSelector(state => state.dataReducer);
    let count = 0;
    let getValue = 0;
    let totalVaccinationNumber = [];
    let totalFemaleTakenVaccine = [];
    let totalMaleTakenVaccine = [];
    let totalNonBinaryTakenVaccine = [];
   

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

    const fetchVaccinationOnGender = () =>  {
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
    fetchVaccinationOnGender()

const fetchVaccinationOfSolarBuddhica = allVaccinationData.filter((allVacccinationItem)=> {
    return allSolarBuddhicaData.some((solarVaccineItem)=> {
        return allVacccinationItem.sourceBottle === solarVaccineItem.id;
    })
})
// console.log('the result is', fetchVaccinationOfSolarBuddhica)

const fetchVaccinationOfAntique = allVaccinationData.filter((allVacccinationItem)=> {
    return allAntiquaData.some((antiuqeVaccineItem)=> {
        return allVacccinationItem.sourceBottle === antiuqeVaccineItem.id;
    })
})
// console.log('the result is', fetchVaccinationOfAntique.length)

const fetchVaccinationOfZerpfy = allVaccinationData.filter((allVacccinationItem)=> {
    return allZerpfyData.some((zerpfyVaccineItem)=> {
        return allVacccinationItem.sourceBottle === zerpfyVaccineItem.id;
    })
})
// console.log('the result is', fetchVaccinationOfZerpfy.length)


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
        <div className="col-10 vaccinationResult">
            <VaccinationText totalVaccinationNumber={totalVaccinationNumber.length} 
                totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
                totalMaleTakenVaccine={totalMaleTakenVaccine.length}
                totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length}
                totalAntiqueVaccineUsed={fetchVaccinationOfAntique.length}
                totalSolarBuddhicaVaccineUsed={fetchVaccinationOfSolarBuddhica.length}
                totalZerpfyVaccineUsed={fetchVaccinationOfZerpfy.length} />

            <PieChart_vaccination totalVaccinationNumber={totalVaccinationNumber.length}
            totalMaleTakenVaccine={totalMaleTakenVaccine.length}
            totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
            totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length}
            totalAntiqueVaccineUsed={fetchVaccinationOfAntique.length}
            totalSolarBuddhicaVaccineUsed={fetchVaccinationOfSolarBuddhica.length}
            totalZerpfyVaccineUsed={fetchVaccinationOfZerpfy.length}  />
        </div>
          
        </>
    )
}
