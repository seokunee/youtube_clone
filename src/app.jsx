<<<<<<< HEAD
import React from "react";
import "./app.css";

function App() {
  return <h1>hello</h1>;
}
=======
import React, { useState, useEffect, useCallback, isValidElement } from "react";
import Search from "./components/nav_bar/search";
import VideoList from "./components/video_list/video_list";
import styles from "./app.module.css";
import Player from "./components/player/player";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [watchVideo, setVideo] = useState({
    snippet: { title: "", channelTitle: "", description: "" },
  });
  const updateList = useCallback((query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items));
  });

  useEffect(() => {
    youtube
      .initUpdate() //
      .then((items) => setVideos(items));
  }, []);

  const initYoutube = useCallback(() => {
    setVideo({
      snippet: { title: "", channelTitle: "", description: "" },
    });
  });

  const resetVideos = useCallback(() => {
    youtube
      .initUpdate() //
      .then((items) => setVideos(items));
  });
  return (
    <div className={styles.app}>
      <Search
        updateList={updateList}
        initYoutube={initYoutube}
        resetVideos={resetVideos}
      />
      <div className={styles.list__container}>
        {watchVideo.snippet.title != "" && (
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
>>>>>>> 7fd68f8 (add player and lists)

export default App;
