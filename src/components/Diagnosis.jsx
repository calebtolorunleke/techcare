import React from "react";
import { useData } from "../context/DataContext";
import Diagnosisgraph from "./Diagnosisgraph";

const Diagnosis = () => {
  const { selectedPatient } = useData();
  if (!selectedPatient) {
    return (
      <section className="w-[25%] flex items-center justify-center text-gray-400 bg-white">
        Select a patient to view details
      </section>
    );
  }
  return (
    <section className="flex flex-col gap-2 bg- w-[50%]">
      <Diagnosisgraph />
      <div className="rounded-xl bg-white py-2 px-[1rem] flex flex-col gap-5 w-[full]">
        <h1 className="font-bold">Diagnotic List</h1>
        <div>
          <div className="w-full space-y-1">
            {/* Header */}
            <div className="grid grid-cols-6 bg-gray-100 rounded-full p-3 font-bold text-left">
              <div className="col-span-2">Problem/Diagnosis</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-1">Status</div>
            </div>

            {/* Rows */}
            <div className="overflow-y-auto max-h-[185px]">
              {selectedPatient.diagnostic_list.map((diagnostic, index) => (
                <div
                  className="grid grid-cols-6 p-3 border-b border-b-gray-200"
                  key={index}
                >
                  <div className="col-span-2">{diagnostic.name}</div>
                  <div className="col-span-3">{diagnostic.description}</div>
                  <div className="col-span-1">{diagnostic.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
