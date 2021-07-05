import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({video, setVideo, setPlayer, playerStatus }) => {
  const title = video.snippet.title;
  const containerType = playerStatus === "off" ? styles.container__off : styles.container__on;
  const itemType = playerStatus === "off" ? styles.item__off : styles.item__on;
  const thumbnailType = playerStatus === "off" ? styles.item__thumbnail__off : styles.item__thumbnail__on;
  const itemTitleType = playerStatus === "off" ? styles.item__title__off : styles.item__title__on;
  


  const updateVideo = () => {
    setVideo(video);
  };
  const onPlayer = ()=>{
    setPlayer("on");
  }
  return (
    <li
      className={containerType}
      onClick={() => {
        updateVideo();
        window.scrollTo(0, 0);
        onPlayer();
      }}
    >
      <div className={itemType}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          className={thumbnailType}
        />
        <div className={itemTitleType}>
            <p className={styles.main__title}>
              {title.length > 40 ? title.slice(0, 40) + "..." : title}
            </p>
            <p className={styles.channel__title}>
              {video.snippet.channelTitle}
            </p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
