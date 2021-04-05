import React from "react";
import PickBlock from "./PickBlock";

export default function TopFive({ type, list }) {
  return (
    <div className="home-playList">
      <h2>Top 5 {type}</h2>
      <ul className="list-wrapper">
        {list.map((pick, i) => (
          <PickBlock
            key={i}
            src={pick.cover_img}
            name={pick.name}
            item={pick}
            type={type}
          />
        ))}
      </ul>
    </div>
  );
}
