import React, { useRef } from "react";
import styles from "./search.module.css";

const Search = (props) => {
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
      <div className={styles.option__btn}>
        <div className={styles.option__icon}>
          <i className="fas fa-microphone"></i>
        </div>
        <div className={styles.option__icon}>
          <i className="fas fa-th"></i>
        </div>
        <div className={styles.option__icon}>
          <i className="fas fa-bell"></i>
        </div>
        <div className={styles.option__icon}>
          <i className="fas fa-user-circle"></i>
        </div>
      </div>
    </header>
  );
};

export default Search;
