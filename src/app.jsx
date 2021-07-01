import React, { useState, useEffect, useCallback } from "react";
import Search from "./components/nav_bar/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Player from "./components/player/player";
import SideBar from "./components/side_bar/side_bar";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [watchVideo, setVideo] = useState({
    snippet: { title: "", channelTitle: "", description: "" },
  });
  

  const updateList = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((items) => setVideos(items));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .initUpdate() //
      .then((items) => setVideos(items));
  }, [youtube]);

  const initYoutube = useCallback(() => {
    setVideo({
      snippet: { title: "", channelTitle: "", description: "" },
    });
  }, [youtube]);

  const resetVideos = useCallback(() => {
    youtube
      .initUpdate() //
      .then((items) => setVideos(items));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <Search
        updateList={updateList}
        initYoutube={initYoutube}
        resetVideos={resetVideos}
      />
      <div className={styles.container}>
        <SideBar />
        {watchVideo.snippet.title !== "" && (
          <div className={styles.player}>
            <Player video={watchVideo} />
          </div>
        )}
        <div className={styles.videos}>
          <VideoList videos={videos} setVideo={setVideo} />
        </div>
      </div>
    </div>
  );
};

export default App;
