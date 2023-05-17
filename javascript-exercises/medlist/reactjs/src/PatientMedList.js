import React, { useEffect, useState } from "react";
import { getMedications } from "./MedicationService";

const MedList = ({ medications = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Directions for Use</th>
        <th>Condition</th>
        <th>Prescriber</th>
      </tr>
    </thead>
    <tbody>
      {medications.map((med) => (
        <tr key={med.id} className="medRow" data-testid="med-row">
          <td>{med.name}</td>
          <td>{med.directionsForUse.toUpperCase()}</td>
          <td>{med.condition.toUpperCase()}</td>
          <td>{med.prescriber.name.toUpperCase()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default function PatientMedList() {
  const [{ medications, loading }, setState] = useState({
    medications: [],
    loading: true,
  });

  useEffect(() => {
    setState({ medications: getMedications(), loading: false });
  }, []);

  if (loading) return <div data-testid="loading">Please wait....</div>;
  else return <MedList medications={medications} />;
}
