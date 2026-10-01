import Link from "next/link";
import prisma from "../../lib/prisma";
import { deleteTask } from "../actions";

export default async function TaskPage({ params }) {
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
      <h1>{task.title}</h1>

      <p>{task.description}</p>

      <p>Status: {task.completed ? "Completed" : "Pending"}</p>

      <Link href={`/tasks/${task.id}/edit`}>
        <button>Edit Task</button>
      </Link>

      <form action={deleteTask}>
        <input type="hidden" name="id" value={task.id} />
        <button>Delete Task</button>
      </form>

      <Link href="/tasks">
        <p>Go Back</p>
      </Link>
    </main>
  );
}
