import React from "react";
import { Link } from "react-router-dom";

export default function Artists({ list }) {
  return (
    <div className="artists">
      <h1>Artists</h1>
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.name}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/artist/${item.name}`}
              >
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
