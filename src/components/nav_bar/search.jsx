import React, { useRef, memo } from "react";
import styles from "./search.module.css";

const Search = memo(({updateList, initYoutube, resetVideos, setPlayer}) => {
  const inputRef = useRef();

  const searchItems = () => {
    updateList(inputRef.current.value);
    inputRef.current.value = "";
  };

  const submit = (e) => {
    e.preventDefault();
    if(inputRef.current.value != ""){
      searchItems(e);
      initYoutube();
      offPlayer();
    }
  };

  const offPlayer = ()=>{
      setPlayer("off"); 
  }

  return (
    <header>
      <div className={styles.menu__icon}>
        <i className="fas fa-align-justify"></i>
      </div>
      <button
        className={styles.youtube}
        onClick={() => {
          initYoutube();
          resetVideos();
          offPlayer();
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
