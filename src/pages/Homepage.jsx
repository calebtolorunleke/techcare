import React from "react";
import Header from "../components/Header";
import Patients from "../components/Patients";
import Profiledisplay from "../components/Profiledisplay";
import Diagnosis from "../components/Diagnosis";

const Homepage = () => {
  return (
    <main className="max-w-[1250px] mx-auto my-4 px-12 max-h-[calc(100vh-100px)] relative">
      <Header />
      <div className="flex gap-5 justify-between">
        <Patients />
        <Diagnosis />
        <Profiledisplay />
      </div>
    </main>
  );
};

export default Homepage;
