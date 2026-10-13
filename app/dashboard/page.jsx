import { auth, signOut } from "../../auth.js";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>

      {session.user.image && (
        <img
          src={session.user.image}
          alt="Profile picture"
          width={80}
          height={80}
        />
      )}

      <p>{session.user.email}</p>

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">Sign out</button>
      </form>

      <div>
        <Link href="/tasks">
          <p>Tasks</p>
        </Link>
      </div>
    </main>
  );
}
