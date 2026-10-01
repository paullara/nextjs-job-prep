import prisma from "../lib/prisma";
import Link from "next/link";

export default async function TasksPage() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>Tasks</h1>

      <Link href="/tasks/create">
        <button className="bg-blue-500 rounded-md text-white">
          Add new Task
        </button>
      </Link>

      <hr />

      {tasks.map((task) => (
        <Link href={`/tasks/${task.id}`} key={task.id}>
          <div>
            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <p>{task.completed ? "Completed" : "Pending"}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
