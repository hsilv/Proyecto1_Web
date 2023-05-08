import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Welcome } from "./components/welcome";
import { Paid } from "./components/paid";
import { Black } from "./components/black";
import { LeftCard } from "./components/card";
import paidGif from "./img/getpaid.04846f59.gif";
import accessPlay from "./img/accessplaylist.c4d542a4.gif";
import distribute from "./img/distribute.48e2adb5.gif";
import { Support } from "./components/support";
import { RightCard } from "./components/card";
import knowtop from "./img/knowtopfans.803b376d.gif";
import buildProfile from "./img/buildyourprofile.22d13177.gif";
import tracks from "./img/tracks.00aef2dc.gif";
import { Bottom } from "./components/bottom";

export function App() {
  return (
    <div>
      <Welcome />
      <Black />
      <LeftCard
        title="Get paid fairly for your music."
        p={[
          "Our revolutionary new fan-powered model is a more equitable and transparent approach that pays artists directly based on top fans' listening habits.",
          <div>
            <b>
              “It's such a simple idea. (As a fan) your monthly fees get split
              up between the songs (and artists) you actually listen to.“— RAC,
            </b>{" "}
            artist and producer.
          </div>,
        ]}
        img={paidGif}
      />
      <LeftCard
        title="Access playlist opportunities, increase your streams and reach new fans."
        p={[
          "SoundCloud for Artists is the only platform that allows you to submit your tracks for national airplay via SoundCloud Radio on SiriusXM. Start pitching now to get your tracks in the hands of DSP playlist editors, A&R execs, brands, music supervisors and more.",
        ]}
        img={accessPlay}
      />
      <LeftCard
        title="Distribute your music to Spotify, Apple, TikTok, and more."
        p={[
          "SoundCloud is the only streaming platform that also amplifies the global reach of your releases as a distributor to all major streaming platforms and social networks.",
        ]}
        img={distribute}
      />
      <Support />
      <RightCard
        title="Know who your top fans are and message them directly."
        p={[
          "SoundCloud is the only streaming platform that allows you to easily identify your top fans based on their listening and engagement habits that support your music, and message them directly via desktop or mobile.",
        ]}
        img={knowtop}
      />
      <RightCard
        title="Build your profile and share your brand."
        p={[
          "Tell your story and let listeners fall in love with you by using our expanded profile tools. Build your brand and express yourself to give fans more insight into who you are and what moves you. Repost and pin your favorite tracks in Spotlight, create playlists with commentary, host AMAs, and send text and audio messages to your top fans.",
        ]}
        img={buildProfile}
      />
      <RightCard
        title="Get feedback on your tracks to perfect your sound."
        p={[
          "Only on SoundCloud can fans directly give feedback to your tracks. Send private links and post tracks for select groups of listeners only. Then get their feedback directly, make edits to your track, and replace the file without losing any stats.",
        ]}
        img={tracks}
      />
      <Bottom/>
    </div>
  );
}
