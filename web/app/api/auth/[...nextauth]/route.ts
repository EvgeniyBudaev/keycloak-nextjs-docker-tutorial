import NextAuth from "next-auth/next";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";

console.log("route.ts CLIENT_SECRET: ", process.env.KEYCLOAK_CLIENT_SECRET);
console.log("route.ts NEXT_LOCAL_KEYCLOAK_URL: ", process.env.NEXT_LOCAL_KEYCLOAK_URL);
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };