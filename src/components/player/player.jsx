import React from "react";
import styles from "./player.module.css";

const Player = (props) => {
  return (
    <div className={styles.player_display}>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="360"
        src={`http://www.youtube.com/embed/${props.video.id}?enablejsapi=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
      <span className={styles.title}>{props.video.snippet.title}</span>
      <span className={styles.channelTitle}>
        {props.video.snippet.channelTitle}
      </span>
      <p className={styles.description}>{props.video.snippet.description}</p>
    </div>
  );
};

export default Player;
