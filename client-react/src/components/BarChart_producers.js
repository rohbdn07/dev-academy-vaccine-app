import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./style.css";

export default function BarChart_producers(props) {
  const { kysArray, HyksArray, TyksArray, OysArray, TaysArray } = props;

  const data = [
    {
      name: "KYS",
      KYS: kysArray,
    },
    {
      name: "HYKS",
      HYKS: HyksArray,
    },
    {
      name: "TYKS",
      TYKS: TyksArray,
    },
    {
      name: "OYS",
      OYS: OysArray,
    },
    {
      name: "TAYS",
      TAYS: TaysArray,
    },
  ];

  return (
    <>
      <div className="barchart">
        <BarChart width={750} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="KYS" fill="#00000" />
          <Bar dataKey="HYKS" fill="#82ca9d" />
          <Bar dataKey="TYKS" fill="#1976d2" />
          <Bar dataKey="OYS" fill="#A00000" />
          <Bar dataKey="TAYS" fill="#ffbf00" />
        </BarChart>
      </div>
    </>
  );
}
