import React, {useEffect} from 'react';
import { vaccination }  from '../../data/vaccination';
import {useDispatch, useSelector} from 'react-redux';
import {getVaccinationAction} from '../../Redux/Action/getData-action';
import VaccinationText from '../vaccineOrderText/VaccinationText';
import PieChartVaccination from '../pieChart/PieChart_vaccination';
import '../style.css';

export default function VaccinationResult() {
    const dispatch = useDispatch();
    const { allVaccinationData, allAntiquaData, allSolarBuddhicaData, allZerpfyData } = useSelector(state => state.dataReducer);
    let count = 0;
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
        allVaccinationData.map((item, index)=> {
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

const fetchVaccinationOfAntique = allVaccinationData.filter((allVacccinationItem)=> {
    return allAntiquaData.some((antiuqeVaccineItem)=> {
        return allVacccinationItem.sourceBottle === antiuqeVaccineItem.id;
    })
})

const fetchVaccinationOfZerpfy = allVaccinationData.filter((allVacccinationItem)=> {
    return allZerpfyData.some((zerpfyVaccineItem)=> {
        return allVacccinationItem.sourceBottle === zerpfyVaccineItem.id;
    })
})

    return (
        <>
            <div className="col-lg-10 vaccinationResult">
                <VaccinationText totalVaccinationNumber={totalVaccinationNumber.length} 
                    totalFemaleTakenVaccine={totalFemaleTakenVaccine.length}
                    totalMaleTakenVaccine={totalMaleTakenVaccine.length}
                    totalNonBinaryTakenVaccine={totalNonBinaryTakenVaccine.length}
                    totalAntiqueVaccineUsed={fetchVaccinationOfAntique.length}
                    totalSolarBuddhicaVaccineUsed={fetchVaccinationOfSolarBuddhica.length}
                    totalZerpfyVaccineUsed={fetchVaccinationOfZerpfy.length} />

                <PieChartVaccination totalVaccinationNumber={totalVaccinationNumber.length}
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
