"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function updateTask(formData) {
  const id = Number(formData.get("id"));
  const titles = formData.get("title");
  const description = formData.get("description");
  const completed = formData.get("completed") === "on";

  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      title: titles,
      description: description,
      completed: completed,
    },
  });

  revalidatePath(`/tasks/${id}`);
  revalidatePath("/tasks");
  redirect("/tasks");
}

export async function deleteTask(formData) {
  const id = Number(formData.get("id"));

  await prisma.task.delete({
    where: {
      id,
    },
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}
