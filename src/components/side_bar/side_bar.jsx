import React from "react";
import styles from "./side_bar.module.css";

const SideBar = (props) => {
  const sideBarData = [
    ["home", "홈"],
    ["compass", "탐색"],
    ["envelope-open-text", "구독"],
    ["fire", "인기"],
  ];

  return (
    <ul className={styles.side_bar}>
      {sideBarData.map((icon) => {
        return (
          <li className={styles.side_bar__icon}>
            <i className={`fas fa-${icon[0]}`}></i>
            <span className={styles.icon_info}>{icon[1]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBar;
