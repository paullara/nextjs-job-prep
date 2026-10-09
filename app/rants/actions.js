"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRant(formData) {
  const problem = formData.get("problem");
  const rant = formData.get("rant");

  await prisma.rant.create({
    data: {
      problem,
      rant,
    },
  });

  revalidatePath("/rants");
  redirect("/rants");
}

export async function updateRant(formData) {
  const id = Number(formData.get("id"));
  const problem = formData.get("problem");
  const rant = formData.get("rant");

  await prisma.rant.update({
    where: {
      id: id,
    },
    data: {
      problem: problem,
      rant: rant,
    },
  });

  revalidatePath(`/rants/${id}`);
  redirect("/rants");
}

export async function deleteRant(formData) {
  const id = Number(formData.get("id"));

  await prisma.rant.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/rants");
  redirect("/rants");
}
