import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, NextAuthOptions } from "next-auth";

export const NextAuthOptions: NextAuthOptions = {
  debug: false,
  providers: [
    GitHubProvider({
      cliendId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: ({session, user}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id
        },
      }
    }
  }
}