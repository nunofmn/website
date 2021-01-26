import Head from "next/head";
import styles from "../styles/Home.module.css";
import Avatar from "./components/Avatar";

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
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Avatar
            width="300px"
            height="auto"
            alt="2D blank and white illustration of the website author, Nuno, working on his laptop with his cat near it"
            style={{
              margin: "3rem",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className={styles.title}>Hey 👋, I'm Nuno!</h1>

            <h2
              style={{
                alignSelf: "center",
              }}
            >
              I'm a Frontend Developer from 🇵🇹
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
