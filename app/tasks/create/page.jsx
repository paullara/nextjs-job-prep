import { createTask } from "../actions";
import Link from "next/link";

export default function CreateTask() {
  return (
    <div>
      <h1>Create Task</h1>
      <Link href="/tasks">
        <button className="bg-red-500 text-white rounded-md">Go Back</button>
      </Link>
      <form action={createTask}>
        <input type="text" name="title" placeholder="Task title" />
        <input name="description" placeholder="Description" />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
