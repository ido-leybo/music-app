import React from "react";
import { useParams } from "react-router";

export default function Song({ list }) {
  const { id } = useParams();
  const currentSong = list.filter((song) => song.id === id);

  return (
    <div>
      <h1>
        {currentSong[0].name} / ({currentSong[0].album})
      </h1>
      <h2>{currentSong[0].artist}</h2>
      <h4>length: ({currentSong[0].length})</h4>
      <iframe
        width="700"
        height="540"
        src={currentSong[0].youtube_link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>Lyrics</h2>
      <p className="lyrics">{currentSong[0].lyrics}</p>
    </div>
  );
}
