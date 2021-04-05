import React from "react";
import TopFive from "./TopFive";

export default function Home({ songs, playlists, artists, albums }) {
  return (
    <div>
      <TopFive type="Songs" list={songs} />
      <TopFive type="Playlists" list={playlists} />
      <TopFive type="Artists" list={artists} />
      <TopFive type="Albums" list={albums} />
    </div>
  );
}
