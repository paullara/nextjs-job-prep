import prisma from "../lib/prisma";
import Link from "next/link";

export default async function RantPage() {
  const rants = await prisma.rant.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <Link href="/rants/create">
        <button className="bg-blue-500 rounded-md text-white">Add new</button>
      </Link>

      {rants.map((rant) => (
        <Link href={`/rants/${id}`} key={rant.id}>
          <div>
            <h2>{rant.problem}</h2>
            <p>{rant.rant}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
