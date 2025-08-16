// context/DataContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { fetchPatientsData } from "../api/fetchApi";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatientsData();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPatients();
  }, []);

  return (
    <DataContext.Provider
      value={{ patients, loading, selectedPatient, setSelectedPatient }}
    >
      {children}
    </DataContext.Provider>
  );
};
