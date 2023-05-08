import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/bottom.scss";
import fosc from '../img/FoSC_2022_EKKSTACY.c029ecb5.jpg';

export function Bottom() {
  return (
    <div className="bottomContainer">
      <div className="descContainer">
        <h2>On SoundCloud, your streams and fans are worth more.</h2>
        <p>
          We believe that what’s next isn’t determined by algorithms and
          gatekeepers, but that the true path toward a long and successful
          career is best achieved by cultivating deep fan relationships and
          community.
          <br />
          <br />
          We’re driving the evolution of what streaming should be, and what it
          needs to be to create a more equitable and exciting future for ALL
          artists.
          <br />
          <br />
          Become a member of something much bigger than any other streaming
          platform or distributor can offer- a movement and community of
          artists, producers, and songwriters who are the driving force that
          continues to push what’s 
          <i> Next</i>.
        </p>
        <div className="buttonContainer">
            <div className="buttonRow">
                <button className="white">
                    Join SoundCloud
                </button>
                <button className="black">
                    Sign into your SoundCloud account
                </button>
            </div>
        </div>
      </div>
      <div className="picContainer">
        <img src={fosc} alt="Fosc" />
      </div>
    </div>
  );
}
