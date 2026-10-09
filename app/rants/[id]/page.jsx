import Link from "next/link";
import prisma from "../../lib/prisma";
import { deleteRant } from "../actions";

export default async function RantPage({ params }) {
  const { id } = await params;

  const rant = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!rant) {
    return (
      <div>
        <h1>Rant not found</h1>
        <Link href="/rants">
          <p>Go back</p>
        </Link>
      </div>
    );
  }

  return (
    <main>
      <h1>{rant.problem}</h1>
      <p>{rant.rant}</p>
      <Link href={`/rants/${id}/edit`}>
        <button>Edit Rant</button>
      </Link>
      <form action={deleteRant}>
        <input type="hidden" name="id" value={rant.id} />
        <button>Delete Rant</button>
      </form>

      <Link href="/rants">
        <p>Go back</p>
      </Link>
    </main>
  );
}
