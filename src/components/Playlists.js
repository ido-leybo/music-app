import React from "react";
import { Link } from "react-router-dom";

export default function Playlist({ list }) {
  return (
    <div>
      <h1>Playlists</h1>
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/playlist/${item.id}`}>
                <img src={item.cover_img} width="200px" alt={item.name} />
                <h2>{item.name}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
