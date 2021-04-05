import React from "react";

export default function Album({ list }) {
  return (
    <div>
      <h1>Albums</h1>
      <ul className="list-wrapper">
        {list.map((item) => {
          return (
            <li key={item.name}>
              <img src={item.cover_img} width="200px" alt={item.name} />
              <h2>{item.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
