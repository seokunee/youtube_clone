import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.video__list}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} setVideo={props.setVideo} />
    ))}
  </ul>
);

export default VideoList;
