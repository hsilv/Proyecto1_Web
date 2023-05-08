import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import poteBaby from "../img/poteBaby.dffb49e2.svg";

export function Support() {
  return (
    <div className="blackContainer support">
      <div className="supportContainer">
        <div className="picContainer">
          <img src={poteBaby} alt="Pote Baby" />
        </div>
        <div className="descContainer">
          <h2>
            “My earliest supporter was SoundCloud...my right hand man since day
            one”
          </h2>
          <p>
            <b>Pote Baby</b> <br />
            First on SoundCloud of '22 Artists
          </p>
        </div>
      </div>
    </div>
  );
}
