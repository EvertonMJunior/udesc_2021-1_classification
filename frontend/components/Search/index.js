import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";

const Search = (props) => {
  const { list } = props;

  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/courses/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.courses);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className={style.container} ref={searchRef}>
      <input
        className={style.search}
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Busque pelo nome do curso"
        type="text"
        value={query}
      />
      {active && results.length > 0 && (
        <ul className={style.results}>
          {results.map(({ id, name }) => (
            <li className={style.result} key={id}>
              <Link href={`/courses/${id}/classification?list=${list}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
