import Link from "next/link";
import prisma from "../../../lib/prisma";
import { updateRant } from "../../actions";

export default async function EditRantPage({ params }) {
  const { id } = await params;

  const rant = await prisma.rant.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!rant) {
    return (
      <div>
        <h1>Rant Not Found!!</h1>
        <Link href="/rants">
          <p>Go back</p>
        </Link>
      </div>
    );
  }

  return (
    <main>
      <h1>Edit Rant</h1>
      <form action={updateRant}>
        <input type="hidden" name="id" value={task.id} />

        <div>
          <label>Problem/Issue</label>
          <input type="text" name="problem" defaultValue={rant.problem} />
        </div>
        <div>
          <label>Rant</label>
          <input name="rant" defaultValue={rant.rant ?? ""} />
        </div>

        <button type="submit">Save</button>
      </form>

      <Link href={`/rants/${rant.id}`}>
        <p>Cancel</p>
      </Link>
    </main>
  );
}
