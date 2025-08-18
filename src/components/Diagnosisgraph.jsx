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
  { date: "2025-01-01", cases: 2 },
  { date: "2025-02-01", cases: 5 },
  { date: "2025-03-01", cases: 3 },
  { date: "2025-04-01", cases: 6 },
  { date: "2025-05-01", cases: 4 },
];

const Diagnosisgraph = () => {
  return (
    <section className="bg-white py-2 px-2 rounded-xl">
      <h1>Diagnosis History</h1>
      {/* Graph */}
      <div className="w-full h-64 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="cases"
              stroke="#8884d8"
              strokeWidth={2}
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
