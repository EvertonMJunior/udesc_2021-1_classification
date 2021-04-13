import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import Head from "../../../components/Header";
import Footer from "../../../components/Footer";

function titleCase(str) {
  let final = str;
  try {
    final = str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
  } catch (error) {}
  return final;
}

const ClassificationList = (classification) => {
  let sections = Object.keys(classification);

  return sections.map((section) => (
    <div className={styles.card}>
      <h4 className="mb-0">{section}</h4>
      <ol>
        {classification[section].map((candidate) => (
          <li>
            {titleCase(candidate.name)} — {candidate.grade}
          </li>
        ))}
      </ol>
    </div>
  ));
};

const Classification = () => {
  const router = useRouter();
  let { id, list } = router.query;
  if (!id) return <div></div>;
  if (!list) return <div></div>;

  const [results, setResults] = useState({});

  const searchEndpoint = `/api/courses/${id}/classification?list=${list}`;

  useEffect(() => {
    fetch(searchEndpoint)
      .then((res) => res.json())
      .then((res) => {
        setResults(res);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className={styles.title}>UDESC 2021/1</h1>
          <h2 className={styles.subtitle}>Classificação extraoficial</h2>
          {results.course && results.classification && (
            <div>
              <p className={styles.description}>
                <Link href={`/search?list=${list}`}>
                  <a>&larr; {results.course.name}</a>
                </Link>
              </p>
              <p style={{ textAlign: "center" }}>
                Candidatos com inscrição indeferida por qualquer motivo não
                estão inclusos.
              </p>
            </div>
          )}
        </div>
        {results.course && results.classification && (
          <div>{ClassificationList(results.classification)}</div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Classification;
