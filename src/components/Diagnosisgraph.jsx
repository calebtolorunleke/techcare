import React from "react";
import respiratory from "../Images/respiratoryImage.svg";
import temperature from "../Images/temperature.svg";
import heartrate from "../Images/heartrate.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Oct 2023", value1: 120, value2: 120 },
  { date: "Nov 2023", value1: 140, value2: 118 },
  { date: "Dec 2023", value1: 100, value2: 160 },
  { date: "Jan 2024", value1: 160, value2: 110 },
  { date: "Feb 2024", value1: 80, value2: 150 },
  { date: "Mar 2024", value1: 180, value2: 158 },
];

const Diagnosisgraph = () => {
  return (
    <section className="bg-white flex flex-col gap-2 py-2 px-2 rounded-xl">
      <h1>Diagnosis History</h1>
      {/* Graph */}
      <div className="bg-white rounded-xl p-4 shadow-md w-full h-[250px]">
        <h2 className="font-bold mb-2">Blood Pressure History</h2>
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              domain={[60, 180]}
              ticks={[60, 80, 100, 120, 140, 160, 180]}
            />
            <Tooltip />
            <Legend verticalAlign="top" align="right" />
            <Line
              type="monotone"
              name="Systolic"
              dataKey="value1"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              name="Diastolic"
              dataKey="value2"
              stroke="#82ca9d"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-row justify-between gap-3">
        <div className="flex flex-col gap-2 bg-[#E0F3FA] py-2 px-2 rounded-lg w-full">
          <img src={respiratory} alt="" className="w-15 h-15" />
          <h5 className="text-sm">Respiratory Rate</h5>
          <h1 className="font-bold text-xl">20 bpm</h1>
          <span className="text-sm">Normal</span>
        </div>
        <div className="flex flex-col gap-2 bg-[#FFE6E9] py-2 px-2 rounded-lg w-full">
          <img src={temperature} alt="" className="w-15 h-15" />
          <h5 className="text-sm">Temperature</h5>
          <h1 className="font-bold text-xl">98.6&deg;F</h1>
          <span className="text-sm">Normal</span>
        </div>
        <div className="flex flex-col gap-2 bg-[#FFE6F1] py-2 px-2 rounded-lg w-full">
          <img src={heartrate} alt="" className="w-15 h-15" />
          <h5 className="text-sm">Heart Rate</h5>
          <h1 className="font-bold text-xl">20 bpm</h1>
          <span className="text-sm">Lower than average </span>
        </div>
      </div>
    </section>
  );
};

export default Diagnosisgraph;
