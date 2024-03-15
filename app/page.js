import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "@/components/Dashboard"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect("/login");

  return (
    <main className={styles.main}>
      <Dashboard />
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
