import React from "react";
import "./VideoPage.css";

function VideoPage() {
  return (
    <div className="videoPage">
      <div className="videoItem">
        <iframe
          src="https://www.youtube.com/watch?v=7NtDL5Lttt4"
          width="560px"
          height="315px"
          frameborder="0"
          allowFullScreen
          allow="auto-play"

        ></iframe>
      </div>
    </div>
  );
}

export default VideoPage;
