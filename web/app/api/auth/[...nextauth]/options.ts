import {AuthOptions} from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      jwks_endpoint: `${process.env.KEYCLOAK_CONTAINER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/certs`,
      wellKnown: undefined,
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}`,
      authorization: {
        url: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth`,
      },
      token: `${process.env.KEYCLOAK_CONTAINER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
      userinfo: `${process.env.KEYCLOAK_CONTAINER_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
    }),
  ],
};