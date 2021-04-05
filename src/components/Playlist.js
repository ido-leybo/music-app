import React from "react";
import { useParams } from "react-router-dom";

export default function Playlist({ list, songs }) {
  const { id } = useParams();
  const currentPlayList = list.filter((playlist) => playlist.id === id);
  const playlistName = currentPlayList[0].name;
  const playListSongs = currentPlayList[0].songs;
  const filterSongs = songs.filter((song) => {
    const mapArr = playListSongs.map((item) => {
      if (item === song.id) {
        return item;
      }
      return null;
    });
    if (mapArr.includes(song.id)) {
      return song;
    }
    return null;
  });

  return (
    <div>
      <h1>{playlistName}</h1>
      <ul className="list-wrapper">
        {filterSongs.map((song) => {
          return (
            <li key={song.id}>
              <h3>{song.name}</h3>
              <iframe
                width="320"
                height="240"
                src={song.youtube_link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
