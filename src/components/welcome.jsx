import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import SoundCloudLogo from "../img/sc-logo-for-artists-cloud-black.37f1a0e2.png";
import Kellow from "../img/Kelow.png";

export function Welcome() {
  return (
    <div className="headDiv">
      <div className="bar">
        <img src={SoundCloudLogo} alt="SoundCloud Logo" />
      </div>
      <a
        href="https://soundcloud.com/kelow"
        className="Kellow"
        style={{ backgroundImage: `url(${Kellow})` }}
      >
        <div></div>
      </a>
      <div className="presentation">
        <div className="container">
          <div className="title">
            This is <br /> SoundCloud for Artists.
          </div>
          <div className="desc">
            Introducing our all in one platform to help artists <br /> accelerate
            careers and become what's Next in music.
          </div>
          <div className="buttonContainer">
            <div className="buttons">
                <button className="join">Join SoundCloud for Artists</button>
                <button className="sign">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
