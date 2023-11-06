import React from "react";
import "./HomePage.css";
import VideoCard from "../components/VideoCard";
import SideBar from "../components/SideBar";

function HomePage() {
  return (
    <div className="main-flex-container">
      <div className="navbar">
        <div className="logo">Youtube</div>
        <div className="searchBar">
          <input type="search" name="search" id="search" placeholder="Search" />
          <button id="searchBtn" type="submit">Search</button>
        </div>
        <div className="sign_in">
          sign in
        </div>
      </div>
      <div className="page">
        <div className="sidebar">
          <SideBar text="Home"/>
          <SideBar text="Shorts"/>
          <SideBar text="Subscriptions"/>
          <hr />
          <SideBar text="Library"/>
          <SideBar text="History"/>
          <SideBar text="Your Videos"/>
          <SideBar text="Watch Later"/>
          <hr />
          <SideBar text="Settings"/>
          <SideBar text="Report History"/>
          <SideBar text="Help"/>
          <SideBar text="Send Feedback"/>
        </div>
        <div className="main-container">

        <div className="main">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
