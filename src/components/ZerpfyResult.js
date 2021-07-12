import React, {useEffect} from 'react';
import { zerpfy }  from '../data/zerpfy';
import {useDispatch, useSelector} from 'react-redux'
import {getSolarBuddhicaAction, getZerpfyAction} from '../Redux/Action/getData-action';
import BarChart_producers from './BarChart_producers';
import TextInfo from './TextInfo';

export default function ZerpfyResult() {
    const dispatch = useDispatch();
    const {allZerpfyData} = useSelector(state => state.dataReducer)
    let count = 0
    let kysArray = []
    let HyksArray = []
    let TyksArray = []
    let OysArray = []
    let receivedVaccineArray = []
    let VaccineName = ''


    useEffect(() => {
       try {
        fetchData(zerpfy)
       } catch (error) {
           console.log('there is an error fetching the data', error)
       }
    }, [])

    const fetchData = (zerpfy) => {
        dispatch(getZerpfyAction(zerpfy))
        
    }

    const fetchOrderedData = () =>  {
        return allZerpfyData.map((item, index)=> {
        if(item.vaccine === 'Zerpfy') {
            VaccineName = 'Zerpfy'
        }
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

    const fetchReceivedVaccine = () => {
        allZerpfyData.map((item)=> {
           const getDate = item.arrived;
           const nowDate = Date();
           if (nowDate >= getDate) {
               count += 1;
               receivedVaccineArray.push(`${count},`);
           }
       })
   }
   fetchReceivedVaccine()

    return (
        <>
            <TextInfo receivedVaccineArray={receivedVaccineArray.length} dataLength={allZerpfyData.length} VaccineName={VaccineName} kysArray={kysArray.length} HyksArray={HyksArray.length} TyksArray={TyksArray.length} OysArray={OysArray.length}/>
            <BarChart_producers kysArray={kysArray.length} HyksArray={HyksArray.length} TyksArray={TyksArray.length} OysArray={OysArray.length}/>
        </>
    )
}
