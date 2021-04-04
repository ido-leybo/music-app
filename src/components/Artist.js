import React from "react";
export default function Artist({ artist }) {
  console.log(artist);
  return (
    <div>
      <ul className="list-wrapper">
        <li>
          <img
            width="150px"
            src="https://i1.sndcdn.com/artworks-E9zGRUDMqkSL4toH-SaETVg-t500x500.jpg"
          />
          <h2>Noga Erez</h2>
        </li>
        <li>
          <img
            width="180px"
            height="150px"
            src="https://www.rollingstone.com/wp-content/uploads/2020/11/the-weeknd-snubbed.jpg"
          />
          <h2>The Weekend</h2>
        </li>
      </ul>
    </div>
  );
}
