import React from "react";
import { useParams } from "react-router-dom";

export default function Artist({ list, albums, songs }) {
  const { id } = useParams();
  const currentArtist = list.filter((artist) => artist.name === id);
  const artistName = currentArtist[0].name;
  const artistAlbums = currentArtist[0].albums;
  const artistSongs = currentArtist[0].songs;
  const filterAlbums = albums.filter((album) => {
    const mapArr = artistAlbums.map((item) => {
      if (item === album.id) {
        return item;
      }
      return null;
    });
    if (mapArr.includes(album.id)) {
      return album;
    }
    return null;
  });
  const filterSongs = songs.filter((song) => {
    const mapArr = artistSongs.map((item) => {
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
      <h1>{artistName}</h1>
      <h2>Albums</h2>
      <ul className="list-wrapper">
        {filterAlbums.map((album) => {
          return (
            <li key={album.id}>
              <h3>{album.name}</h3>
              <img width="200px" src={album.cover_img} alt={album.name} />
            </li>
          );
        })}
      </ul>
      <h2>Songs</h2>
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
