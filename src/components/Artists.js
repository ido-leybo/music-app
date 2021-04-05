import React from "react";
import { Link } from "react-router-dom";

export default function Artists({ list }) {
  return (
    <div>
      <h1>Artists</h1>
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.name}>
              <Link to={`/artist/${item.name}`}>
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
