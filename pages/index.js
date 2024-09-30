import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Frame1 from "./frame/introduction";

const metadata = {
  title: "Flower: crash and grow",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={styles.page}
      >
        <Frame1/>
      </div>
    </>
  );
}
