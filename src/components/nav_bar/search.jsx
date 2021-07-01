import React, { useRef, memo } from "react";
import styles from "./search.module.css";

const Search = memo((props) => {
  const inputRef = useRef();

  const searchItems = (e) => {
    e.preventDefault();
    props.updateList(inputRef.current.value);
    inputRef.current.value = "";
  };

  const submit = (e) => {
    searchItems(e);
    props.initYoutube();
  };

  return (
    <header>
      <div className={styles.menu__icon}>
        <i class="fas fa-align-justify"></i>
      </div>
      <button
        className={styles.youtube}
        onClick={() => {
          props.initYoutube();
          props.resetVideos();
        }}
      >
        <i className="fab fa-youtube"></i>
        <span className={styles.youtube__title}>Youtube</span>
      </button>
      <form className={styles.search} onSubmit={submit}>
        <input
          ref={inputRef}
          type="text"
          className={styles.search__input}
          placeholder="Search.."
        />
        <input type="text" className={styles.input__display} />
        <button className={styles.search__btn}>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className={styles.option__icon}>
        <i className="fas fa-user-circle"></i>
      </div>
    </header>
  );
});

export default Search;
