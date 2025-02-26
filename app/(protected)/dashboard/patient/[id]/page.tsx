"use client";

import DiagnosisHistory from "@/components/shared/DiagnosisHistory";
import DiagnosticList from "@/components/shared/DiagnosticList";
import LabResultsList from "@/components/shared/LabResultList";
import PatientProfile from "@/components/shared/PatientProfile";
import getAllPatients from "@/lib/services/Patients";
import {
  DiagnosisHistory as DHistory,
  Diagnostic,
  Patient,
} from "@/lib/services/PatientsTypes";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import Link from "next/link";
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
      <nav className="mb-4">
        <Link href="/dashboard" className="flex gap-2 items-center">
          <ArrowLeft />
          <span>See all patients</span>
        </Link>
      </nav>

      <section className="grid md:flex gap-4">
        {/* Profile & Lab Results */}
        <div className="w-full max-w-96 grid gap-4">
          <PatientProfile patient={patient} />
          <LabResultsList labResults={labResults} />
        </div>

        <div className="w-full grid gap-4">
          <DiagnosisHistory diagnosisHistory={diagnosisHistory} />
          <DiagnosticList diagnostics={diagnosticList} />
        </div>
      </section>
    </>
  );
}
