import Link from "next/link";

import Footer from "../components/Footer";
import Head from "../components/Header";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>UDESC 2021/1</h1>
        <h2 className={styles.subtitle}>Classificação extraoficial</h2>

        <p className={styles.description}>Selecione o critério de inscrição:</p>

        <div className={styles.grid}>
          <Link href="search?list=0">
            <a className={styles.card}>
              <h3>ENEM &rarr;</h3>
            </a>
          </Link>
          <Link href="search?list=1">
            <a className={styles.card}>
              <h3>Vestibular UDESC &rarr;</h3>
            </a>
          </Link>

          <Link href="search?list=2">
            <a className={styles.card}>
              <h3>Ensino Médio &rarr;</h3>
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
