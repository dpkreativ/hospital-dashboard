import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Stethoscope, UserCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container px-4 py-24 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[600px]">
                Monitor health vitals with precision
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                A comprehensive platform for healthcare professionals and
                patients to track, analyze, and improve health outcomes
                together.
              </p>
            </div>

            <div className="grid md:flex gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  For Patients
                </Button>
              </Link>

              <Link href="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-emerald-600 hover:bg-emerald-700 hover:text-white"
                >
                  For Healthcare Professionals
                </Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl object-cover lg:aspect-square">
            <Image
              src="/images/undraw_medicine_hqqg.svg"
              alt="Medicine"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="border-t bg-emerald-50">
        <div className="container px-4 py-24 md:px-6">
          <div className="grid gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Comprehensive Features
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to monitor and improve patient health
                outcomes
              </p>
            </div>
            <div className="grid gap-8 md:gap-20 md:grid-cols-2">
              <div className="space-y-4 text-right">
                <h3 className="text-xl font-bold">
                  For Healthcare Professionals
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center justify-end gap-2">
                    <span>Real-time patient vital monitoring dashboard</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Automated alerts for concerning trends</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Patient history and progress tracking</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Secure messaging with patients</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Custom alert thresholds for each patient</span>
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">For Patients</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <span>Easy-to-use mobile app for vital tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <span>Medication reminders and tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <span>Direct communication with healthcare team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <span>
                      Personalized health insights and recommendations
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    <span>Integration with popular health devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container px-4 py-24 md:px-6 border-t">
        <div className="grid gap-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Transforming Healthcare Monitoring
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how VitalTrack is revolutionizing patient care across
              different medical scenarios
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg inline-block">
                <Activity className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold">Chronic Disease Management</h3>
              <p className="text-gray-500">
                Monitor vital signs, medication adherence, and symptoms for
                conditions like diabetes, hypertension, and heart disease.
                Receive alerts for concerning trends.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg inline-block">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold">Post-Surgery Recovery</h3>
              <p className="text-gray-500">
                Track recovery progress, monitor vital signs, and stay connected
                with your healthcare team after surgical procedures for optimal
                healing.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg inline-block">
                <UserCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold">Remote Patient Monitoring</h3>
              <p className="text-gray-500">
                Enable healthcare providers to monitor patients remotely,
                reducing hospital visits while maintaining high-quality care
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
