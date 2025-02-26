import { Activity } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4">
      {/* Brand */}
      <Link href="/" className="flex items-center space-x-2">
        <Activity className="h-6 w-6 text-emerald-600" />
        <span className="text-xl font-semibold">VitalTrack</span>
      </Link>

      {/* Navigation */}
      <nav></nav>
    </header>
  );
}
