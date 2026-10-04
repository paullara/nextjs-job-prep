"use server";

import prisma from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlog(formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  await prisma.blog.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export async function updateBlog(formData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title");
  const description = formData.get("description");

  await prisma.blog.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
    },
  });

  revalidatePath(`/blogs/${id}`);
  redirect("/blog");
}

export async function deleteBlog(formData) {
  const id = Number(formData.get("id"));

  await prisma.blog.delete({
    where: {
      id: id,
    },
  });

  revalidatePath("/blogs");
  redirect("/blogs");
}
