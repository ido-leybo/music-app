import React from "react";

export default function Song({ list }) {
  return (
    <div className="songs-div">
      <ul className="song-list">
        {list.map((song) => {
          return <li key={song.id}>{song.name}</li>;
        })}
      </ul>
    </div>
  );
}
