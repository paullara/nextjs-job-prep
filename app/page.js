import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center bg-white">
      <div className="flex justify-between gap-2">
        <Link href="/tasks" className="text-black">
          Tasks
        </Link>
        <Link href="/blog" className="text-black">
          Blog
        </Link>
      </div>
    </main>
  );
}
