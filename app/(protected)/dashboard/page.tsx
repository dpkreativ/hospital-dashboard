import PatientList from "@/components/PatientList";
import getAllPatients from "@/lib/services/Patients";

export default async function Dashboard() {
  const initialData = await getAllPatients();
  return (
    <>
      <PatientList patients={initialData} />
    </>
  );
}
