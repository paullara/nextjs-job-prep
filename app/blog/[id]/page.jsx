import Link from "next/link";
import prisma from "../../lib/prisma";
import { deleteBlog } from "../actions";

export default async function BlogPage({ params }) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
  });

  console.log(id);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <Link href={`/blog/${blog.id}/edit`}>
        <button>Edit Blog</button>
      </Link>

      <form action={deleteBlog}>
        <input type="hidden" name="id" value={blog.id} />
        <button>Delete Blog</button>
      </form>

      <Link href="/blogs">
        <p>Go Back</p>
      </Link>
    </main>
  );
}
