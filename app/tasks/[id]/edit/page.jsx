import Link from "next/link";
import prisma from "../../../lib/prisma";
import { updateTask } from "../../actions";

export default async function EditTaskPage({ params }) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <main>
      <h1>Edit Task</h1>

      <form action={updateTask}>
        <input type="hidden" name="id" value={task.id} />

        <div>
          <label>Title</label>

          <input type="text" name="title" defaultValue={task.title} />
        </div>

        <div>
          <label>Description</label>

          <textarea name="description" defaultValue={task.description ?? ""} />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="completed"
              defaultChecked={task.completed}
            />
            Completed
          </label>
        </div>

        <button type="submit">Update Task</button>
      </form>

      <Link href={`/tasks/${task.id}`}>
        <p>Cancel</p>
      </Link>
    </main>
  );
}
