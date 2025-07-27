import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-700">
          This is a simple Next.js application with a responsive navbar.
        </p>
      </main>
    </div>
  );
}
