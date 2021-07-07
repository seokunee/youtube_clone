import React from "react";
import styles from "./player.module.css";

const Player = (props) => {
  return (
    <div className={styles.player}>
      <iframe
        id="player"
        type="text/html"
        title="youtube video player"
        width="100%"
        height="520"
        src={`https://www.youtube.com/embed/${props.video.id}?enablejsapi=1&origin=https://example.com`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <span className={styles.title}>{props.video.snippet.title}</span>
      <div className={styles.container}>
        <span className={styles.channelTitle}>
          {props.video.snippet.channelTitle}
        </span>
        <div className={styles.subscribe}>
          구독
        </div>
      </div>
      <p className={styles.description}>{props.video.snippet.description}</p>
    </div>
  );
};

export default Player;
