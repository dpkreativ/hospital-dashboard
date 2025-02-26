import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-2 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2024 VitalTrack. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs text-gray-500 hover:underline underline-offset-4"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:underline underline-offset-4"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
