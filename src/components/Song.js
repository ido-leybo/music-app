import React from "react";

export default function Song() {
  return (
    <div>
      <ul>
        <li>
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/enk4vUjbjik"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </div>
  );
}
