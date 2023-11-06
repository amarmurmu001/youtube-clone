import React from "react";
import "./VideoPage.css";
import SuggCard from "../components/SuggCard";
import NavBar from "../components/NavBar";
function VideoPage() {
  return (<>
    
      <NavBar/>
    <div className="videopage">
      <div className="videoItem">
        <iframe
          src="https://youtu.be/7NtDL5Lttt4"
          width="100%"
          height="75%"
          frameborder="0"
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </div>
      <div className="sideBar">
        <SuggCard />
        <SuggCard />
        <SuggCard />
        <SuggCard />
      </div>
    </div>
  </>
  );
}

export default VideoPage;
