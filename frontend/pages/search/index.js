import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Head from "../../components/Header";
import Search from "../../components/Search";
import styles from "../../styles/Home.module.css";

const Classification = () => {
  const router = useRouter();
  let { list } = router.query;
  if (!list) list = 0;

  const lists = [
    {
      id: 0,
      name: "ENEM 2017, 2018 e 2019",
      url:
        "https://www.udesc.br/arquivos/udesc/id_cpmenu/12936/ASSINADO_ENEM_16182618199758_12936.pdf",
    },
    {
      id: 1,
      name: "Vestibular UDESC 2019/2 ou 2020/1",
      url:
        "https://www.udesc.br/arquivos/udesc/id_cpmenu/12936/ASSINADO___VESTIBULAR_16182619011094_12936.pdf",
    },
    {
      id: 2,
      name: "Média final geral do Ensino Médio",
      url:
        "https://www.udesc.br/arquivos/udesc/id_cpmenu/12936/ASSINADO_ENSINO_M_DIO_1618262082485_12936.pdf",
    },
  ];

  if (!lists[list]) return <div></div>;

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <h1 className={styles.title}>UDESC 2021/1</h1>
        <h2 className={styles.subtitle}>Classificação extraoficial</h2>
        <p className={styles.description}>
          <Link href="/">
            <a>&larr; {lists[list].name}</a>
          </Link>
        </p>
        <Search list={list} />
      </main>
      <Footer />
    </div>
  );
};

export default Classification;
