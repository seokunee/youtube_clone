import React, { useEffect, useRef } from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
  const title = props.video.snippet.title;
  const itemRef = useRef();

  const updateVideo = (e) => {
    props.setVideo(props.video);
  };

  return (
    <li
      ref={itemRef}
      className={styles.container}
      onClick={() => {
        updateVideo();
        window.scrollTo(0, 0);
      }}
    >
      <div className={styles.item}>
        <img
          src={props.video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          className={styles.item__thumbnail}
        />
        <div className={styles.item__title}>
          <p className={styles.main__title}>
            {title.length > 40 ? title.slice(0, 40) + "..." : title}
          </p>
          <p className={styles.channel__title}>
            {props.video.snippet.channelTitle}
          </p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
