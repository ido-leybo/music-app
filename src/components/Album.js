import React from "react";
import { useParams } from "react-router-dom";

export default function Album({ list, songs }) {
  const { id } = useParams();
  const currentAlbum = list.filter((album) => album.id === id);
  const albumName = currentAlbum[0].name;
  const artistName = currentAlbum[0].artist;
  const albumSong = currentAlbum[0].songs;
  const filterSongs = songs.filter((song) => {
    const mapArr = albumSong.map((item) => {
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
      <h1>
        <u>{albumName}</u>
      </h1>
      <h4>{artistName}</h4>
      <img
        width="250px"
        src={currentAlbum[0].cover_img}
        alt={currentAlbum[0].name}
      />
      <h2>Songs</h2>
      <ul className="list-wrapper">
        {filterSongs.map((song) => {
          return (
            <li key={song.id}>
              <iframe
                width="320"
                height="240"
                src={song.youtube_link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h4>{song.name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
