import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Badge from "../img/streaming-badge-white.svg";
import SoundCloudLogo from "../img/sc-logo-cloud active.970ed028.svg";

export function Black() {
  return (
    <div className="blackContainer">
      <div className="streaming">
        <div
          style={{ backgroundImage: `url(${Badge})` }}
          className="badge"
        ></div>
        <div className="container">
          <div className="strTitle">
            SoundCloud makes it easy to share your music and get discovered.
          </div>
          <p className="strDesc">
            Not by just anyone, but an audience and community of 150 million
            plus tastemakers…the day one early adopters that come to SoundCloud
            to discover and launch the careers of artists like Billie Eilish,
            Post Malone, Lil Nas X and beyond.
          </p>
        </div>
      </div>
      <div className="carrousel">
        <div className="slider">
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Share your music</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Get discovered</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Build your profile</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Grow your fanbase</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Share your music</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Get discovered</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Build your profile</h2>
          </div>
          <div className="item">
            <img src={SoundCloudLogo} alt="Logo" />
            <h2>Grow your fanbase</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
