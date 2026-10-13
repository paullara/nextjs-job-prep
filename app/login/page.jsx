import { signIn } from "../../auth.js";

export default function LoginPage() {
  return (
    <main>
      <h1>Sign in to your account</h1>

      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirectTo: "/dashboard",
          });
        }}
      >
        <button type="submit">Continue with Google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("discord", {
            redirectTo: "/dashboard",
          });
        }}
      >
        <button type="submit">Continue with Discord</button>
      </form>
    </main>
  );
}
