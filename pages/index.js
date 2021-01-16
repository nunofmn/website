import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nunofn()</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <img width="300px" src="/images/avatar.png" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className={styles.title}>Hey 👋, I'm Nuno!</h1>

            <h2>I'm a Frontend Developer from 🇵🇹</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
