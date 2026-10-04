import { createBlog } from "../actions";
import Link from "next/link";

export default function CreateBlog() {
  return (
    <div>
      <h1>Post Blog</h1>
      <Link href="/blog">
        <button>Go back</button>
      </Link>
      <form action={createBlog}>
        <input type="text" name="title" placeholder="Blog Title" />
        <input name="description" placeholder="Description" />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
