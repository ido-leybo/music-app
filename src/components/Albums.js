import React from "react";
import { Link } from "react-router-dom";

export default function Album({ list }) {
  return (
    <div className="albums">
      <h1>Albums</h1>
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.name}>
              <Link style={{ textDecoration: "none" }} to={`/album/${item.id}`}>
                <img src={item.cover_img} width="200px" alt={item.name} />
                <h3 className="link-name">{item.name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
