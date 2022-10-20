import { useState } from "react";

//child components
import { Video, Menu } from "./components";

import "./App.css";

const VIDEOS = {
  fast: "https://content.codecademy.com/courses/React/react_video-fast.mp4",
  slow: "https://content.codecademy.com/courses/React/react_video-slow.mp4",
  cute: "https://content.codecademy.com/courses/React/react_video-cute.mp4",
  eek: "https://content.codecademy.com/courses/React/react_video-eek.mp4",
};

function App() {
  //React Hooks
  const [src, setSRC] = useState(VIDEOS.fast);

  //function to update src state
  const chooseVideo = (newVideo) => {
    setSRC(VIDEOS[newVideo]);
  }

  return (
    <div className="App">
      <h1>Video Player</h1>
      <Menu chooseVideo={chooseVideo} />
      <Video src={src} />
    </div>
  );
}

export default App;
