import React from "react";
import settingsIcon from "../Images/iconImages/settingsIcon.svg";
import birthIcon from "../Images/iconImages/birthIcon.png";
import femaleIcon from "../Images/iconImages/femaleIcon.png";
import insuranceIcon from "../Images/iconImages/insuranceIcon.png";
import phoneIcon from "../Images/iconImages/phoneIcon.png";
import { useData } from "../context/DataContext";
import downloadIcon from "../Images/iconImages/downloadIcon.svg";

const Profiledisplay = () => {
  const { selectedPatient } = useData();

  if (!selectedPatient) {
    return (
      <section className="w-[25%] flex items-center justify-center text-gray-400 bg-white">
        Select a patient to view details
      </section>
    );
  }

  return (
    <section className="w-[25%] flex flex-col gap-5 max-h-[calc(95vh-100px)] ">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-md flex flex-col py-6 px-5 gap-6">
        {/* Profile Image & Name */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={selectedPatient.profile_picture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover "
          />
          <h1 className="text-xl font-semibold text-gray-800">
            {selectedPatient.name}
          </h1>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-4">
          {[
            {
              icon: birthIcon,
              label: "Date of Birth",
              value: selectedPatient.date_of_birth,
            },
            {
              icon: femaleIcon,
              label: "Gender",
              value: selectedPatient.gender,
            },
            {
              icon: phoneIcon,
              label: "Contact Info.",
              value: selectedPatient.phone_number,
            },
            {
              icon: phoneIcon,
              label: "Emergency Contacts",
              value: selectedPatient.emergency_contact,
            },
            {
              icon: insuranceIcon,
              label: "Insurance Provider",
              value: selectedPatient.insurance_type,
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-row gap-3 items-center">
              <img
                src={item.icon}
                alt={item.label}
                className="w-7 h-7 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">{item.label}</span>
                <span className="text-sm font-medium text-gray-800">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#01F0D0] hover:bg-[#00d9bc] text-sm font-medium text-white py-2 px-6 rounded-full transition-all duration-200">
            Show All Information
          </button>
        </div>
      </div>

      {/* Secondary Card (for upcoming appointments, notes, etc.) */}
      <div className="bg-white rounded-2xl shadow-md flex-1 py-4 px-4 overflow-y-auto">
        <h1 className="font-bold text-lg mb-1 flex-shrink-0">Lab Results</h1>

        {selectedPatient.lab_results.map((lab_result, index) => (
          <div
            className="flex flex-row justify-between items-center py-2"
            key={index}
          >
            <span className="text-sm text-gray-700">{lab_result}</span>
            <img
              src={downloadIcon}
              alt="Download Icon"
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profiledisplay;
