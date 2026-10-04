import Link from "next/link";
import prisma from "../../../lib/prisma";
import { updateBlog } from "../../actions";

export default async function EditBlogPage({ params }) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <h1>Edit Blog</h1>

      <form action={updateBlog}>
        <input type="hidden" name="id" value={blog.id} />

        <div>
          <label>Title</label>
          <input type="text" name="title" defaultValue={blog.title} />
        </div>

        <div>
          <label>Description</label>

          <input name="description" defaultValue={blog.description ?? ""} />
        </div>

        <button type="submit">Update Blog</button>
      </form>

      <Link href={`/blog/${blog.id}`}>
        <p>Cancel</p>
      </Link>
    </main>
  );
}
