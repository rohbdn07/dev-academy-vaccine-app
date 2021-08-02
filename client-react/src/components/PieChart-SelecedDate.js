import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';



export default function PieChartAtSelectedDate (props) {
    const {fetchVaccinationDateOfAntique,
        fetchVaccinationDateOfSolarBuddhica,
        fetchVaccinationDateOfZerpfy
      } = props;

    const selectedDateData = [
        { name: 'Antiqua',
        value: fetchVaccinationDateOfAntique },
        { name: 'SolarBuddhhica', 
        value: fetchVaccinationDateOfSolarBuddhica },
        { name: 'Zerpfy', 
        value: fetchVaccinationDateOfZerpfy },
      ];

      const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return (
        <>
          <div className="piechart d-block">
            <div className="piechart_genderData">
              <PieChart width={300} height={300}>
                <Tooltip />
                <Legend />
                <Pie
                    data={selectedDateData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={85}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {selectedDateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>

            </div>
          </div>
        </>
    );
  
}
