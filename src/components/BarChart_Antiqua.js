import React, {PureComponent} from 'react';
import { LineChart,Line,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector} from 'react-redux';

export default function BarChart_Antiqua() {
const {allData} = useSelector(state => state.dataReducer);
let count = 0
let kysArray = []
let HyksArray = []
let TyksArray = []
let OysArray = []

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


    const data = [
        {
          "name": "KYS",
          "KYS": kysArray.length
        },
        {
          "name": "HYKS",
          "HYKS":HyksArray.length
        },
        {
          "name": "TYKS",
          "TYKS": TyksArray.length
        },
        {
          "name": "OYS",
          "OYS": OysArray.length
        }
      ]
    return (
        <>
           <div className="barchart">
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="KYS" fill="#8884d8" />
                    <Bar dataKey="HYKS" fill="#82ca9d" />
                    <Bar dataKey="TYKS" fill="#1976d2" />
                    <Bar dataKey="OYS" fill="#1976d2" />
                </BarChart>
           </div>
        </>
    )
}
