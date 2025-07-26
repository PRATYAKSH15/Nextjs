import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        className="dark:invert"
      />
      <p className="text-lg text-center">
        This is a simple Next.js application using Geist fonts.
      </p>
      <footer className="text-sm text-gray-500">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}
