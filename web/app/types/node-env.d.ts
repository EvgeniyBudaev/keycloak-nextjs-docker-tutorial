declare namespace NodeJS {
  export interface ProcessEnv {
    KEYCLOAK_CLIENT_ID: string
    KEYCLOAK_CLIENT_SECRET: string
    NEXT_LOCAL_KEYCLOAK_URL: string
    KEYCLOAK_REALM: string
    NEXT_CONTAINER_KEYCLOAK_ENDPOINT: string
  }
}