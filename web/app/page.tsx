import styles from "./page.module.css";
import {getServerSession} from "next-auth";
import Logout from "@/app/components/Logout";
import Login from "@/app/components/Login";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h3>server CLIENT_SECRET</h3>
          <pre>{JSON.stringify(process.env.KEYCLOAK_CLIENT_SECRET, null, 2)}</pre>
        </div>
        <div>
          <h3>server NEXT_LOCAL_KEYCLOAK_URL</h3>
          <pre>{JSON.stringify(process.env.NEXT_LOCAL_KEYCLOAK_URL, null, 2)}</pre>
        </div>

        {!session && (
          <div>
            <Login/>
          </div>
        )}

        {session && (
          <div>
            <div>Your name is {session.user?.name}</div>
            <div><Logout/></div>
          </div>
        )}
      </main>
    </div>
  );
}
