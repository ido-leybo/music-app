import React from "react";
import { Link } from "react-router-dom";

export default function Song({ list }) {
  return (
    <div className="songs-div">
      <h1>Songs</h1>
      <ul className="song-list">
        {list.map((song) => {
          return (
            <Link to={`/song/${song.id}`}>
              <li key={song.id} className="songs-li">
                {song.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
