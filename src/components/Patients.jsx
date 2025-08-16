import React from "react";
import searchIcon from "../Images/iconImages/searchIcon.svg";
import settingsIcon from "../Images/iconImages/settingsIcon.svg";
import moreHoriz from "../Images/iconImages/more_horiz.svg";
import { useData } from "../context/DataContext";

const Patients = () => {
  const { patients, loading, setSelectedPatient } = useData();
  if (loading) return <div>Loading...</div>;
  console.log(patients);
  return (
    <section className="bg-white shadow-md max-h-[calc(95vh-100px)] my- w-[25%] py-4 border-l border-gray-200 rounded-xl flex flex-col">
      <div className="flex flex-row items-center px-4 justify-between mb-5 flex-shrink-0">
        <h2 className="text-lg font-semibold">Patients</h2>
        <img src={searchIcon} alt="search icon" className="w-3 h-5" />
      </div>

      <div className="flex flex-col overflow-y-auto">
        {patients.map((patient, index) => (
          <div
            className="flex flex-row items-center py-4 justify-between transition-all duration-200  hover:bg-[#D8FCF7] hover:w-full"
            key={index}
            onClick={() => setSelectedPatient(patient)}
          >
            <div className="flex flex-row items-center pl-4 gap-2">
              <img
                src={patient.profile_picture}
                alt="patient profile image"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-[10px]">{patient.name}</span>
                <span className="text-[10px] text-gray-500">
                  {patient.gender}, {patient.age}
                </span>
              </div>
            </div>
            <div className="pr-4">
              <img
                src={moreHoriz}
                alt="more icon"
                className="w-4 h-4 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patients;
