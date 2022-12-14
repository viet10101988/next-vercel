import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.title}>
        <h1>Home Page</h1>
        <p className={styles.text}> Some text</p>
        <Link className={styles.btn} href={"/ninjas"}>
          See Ninja Listings
        </Link>
      </div>
    </>
  );
}
