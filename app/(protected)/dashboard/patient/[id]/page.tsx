"use client";

import DiagnosisHistory from "@/components/DiagnosisHistory";
import DiagnosticList from "@/components/DiagnosticList";
import LabResultsList from "@/components/LabResultList";
import PatientProfile from "@/components/PatientProfile";
import getAllPatients from "@/lib/services/Patients";
import {
  DiagnosisHistory as DHistory,
  Diagnostic,
  Patient,
  //   PatientProfile as PProfile,
} from "@/lib/services/PatientsTypes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PatientPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPatient = async () => {
        const patients = await getAllPatients();
        const foundPatient = patients.find(
          (patient) => patient.name.split(" ").join("-") === id
        );
        if (foundPatient) {
          setPatient(foundPatient);
        }
      };

      fetchPatient();
    }
  }, [id]);

  let profile!: PatientProfile;
  let diagnosisHistory!: DHistory[];
  let diagnosticList!: Diagnostic[];
  let labResults!: Array<string>;

  if (patient) {
    if (patient.diagnosis_history) diagnosisHistory = patient.diagnosis_history;

    if (patient.diagnostic_list) diagnosticList = patient.diagnostic_list;

    if (patient.lab_results) labResults = patient.lab_results;
  }

  if (!patient) return <div>Loading...</div>;

  return (
    <>
      <section className="w-full">
        <DiagnosisHistory diagnosisHistory={diagnosisHistory} />
        <DiagnosticList diagnostics={diagnosticList} />
      </section>

      {/* Profile & Lab Results */}
      <section className="w-full max-w-96">
        <PatientProfile patient={patient} />
        <LabResultsList labResults={labResults} />
      </section>
    </>
  );
}
