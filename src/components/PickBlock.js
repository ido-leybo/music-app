import React from "react";

export default function PickBlock({ name, src }) {
  return (
    <li>
      <img className="pick-img" width="200px" src={src} alt={name} />
      <h3>{name}</h3>
    </li>
  );
}
