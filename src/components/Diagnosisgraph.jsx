import React from "react";
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
    <section className="bg-white py-5 px-8">
      {/* Graph */}
      <div className="w-full h-64 mt-6">
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
    </section>
  );
};

export default Diagnosisgraph;
