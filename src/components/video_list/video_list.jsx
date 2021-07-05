import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({videos, setVideo, setPlayer, playerStatus}) => (
  <ul className={playerStatus === "off" ? styles.video__list__off : styles.video__list__on }>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} setVideo={setVideo} setPlayer={setPlayer} playerStatus={playerStatus} />
    ))}
  </ul>
);

export default VideoList;
