import Navbar from "@/components/Navbar";
import PatientList from "@/components/PatientList";
import getAllPatients from "@/lib/services/Patients";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialData = await getAllPatients();
  return (
    <>
      <Navbar />

      <div className="grid grid-cols-8 gap-5 p-5">
        {/* Sidebar */}
        <aside className="w-full col-span-2">
          <PatientList patients={initialData} />
        </aside>
        {/* Main Content */}
        <main className="col-span-6 flex gap-5">{children}</main>
      </div>
    </>
  );
}
