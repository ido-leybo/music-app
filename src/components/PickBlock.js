import React from "react";
import { Link } from "react-router-dom";

export default function PickBlock({ name, src, type, item }) {
  let id;
  let category;
  switch (type) {
    case "Artists":
      id = name;
      category = "artist";
      break;
    case "Playlists":
      id = item.id;
      category = "playlist";
      break;
    case "Albums":
      id = item.id;
      category = "album";
      break;
    case "Songs":
      id = item.id;
      category = "song";
      break;
    default:
      return "unknown";
  }

  return (
    <li>
      <Link style={{ textDecoration: "none" }} to={`/${category}/${id}`}>
        <img className="pick-img" width="200px" src={src} alt={name} />
        <h3 className="link-name">{name}</h3>
      </Link>
    </li>
  );
}
