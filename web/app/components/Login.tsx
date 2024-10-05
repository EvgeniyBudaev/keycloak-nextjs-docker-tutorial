"use client"

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div>
      <div>
        <h3>client CLIENT_SECRET</h3>
        <pre>{JSON.stringify(process.env.KEYCLOAK_CLIENT_SECRET, null, 2)}</pre>
      </div>
      <div>
        <h3>client NEXT_LOCAL_KEYCLOAK_URL</h3>
        <pre>{JSON.stringify(process.env.NEXT_LOCAL_KEYCLOAK_URL, null, 2)}</pre>
      </div>
      <div>
        <h3>client KEYCLOAK_REALM</h3>
        <pre>{JSON.stringify(process.env.KEYCLOAK_REALM, null, 2)}</pre>
      </div>
      <div>
        <button onClick={() => signIn("keycloak")}>
          Signin with keycloak
        </button>
      </div>
    </div>
  )
}