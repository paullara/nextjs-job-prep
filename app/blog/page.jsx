import prisma from "../lib/prisma";
import Link from "next/link";

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main>
      <h1>Blogs</h1>

      <Link href="/blog/create">
        <button>Add New Blog</button>
      </Link>

      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
