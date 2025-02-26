import PatientList from "@/components/shared/PatientList";
import getAllPatients from "@/lib/services/Patients";

export default async function Dashboard() {
  const initialData = await getAllPatients();
  return (
    <>
      <PatientList patients={initialData} />
    </>
  );
}
