import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Discord from "next-auth/providers/discord";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./app/lib/prisma.js";

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: true,

  adapter: PrismaAdapter(prisma),

  providers: [
    Google,
    Discord({
      issuer: "https://discord.com",
      authorization: {
        params: {
          prompt: "none",
        },
      },
    }),
  ],

  session: {
    strategy: "database",
  },

  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
