import { createRant } from "../actions";
import Link from "next/link";

export default function CreateRant() {
  return (
    <div>
      <h1>Create Rant</h1>
      <Link href="/rants">
        <button className="bg-red-500 rounded-md text-white">Cancel</button>
      </Link>

      <form action={createRant}>
        <input type="text" name="problem" placeholder="Problem/Issue" />
        <input name="rant" placeholder="Share your problem" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
