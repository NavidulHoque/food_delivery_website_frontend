/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      provider?: string;
    } & DefaultSession["user"];
  }
}