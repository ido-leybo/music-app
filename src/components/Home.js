import React from "react";
import TopFive from "./TopFive";

export default function Home({ songs, playlists, artists, albums }) {
  return (
    <div>
      <TopFive type="Songs" list={songs} />
      <TopFive type="Playlists" list={playlists} />
      <TopFive type="Artists" list={artists} />
      <TopFive type="Albums" list={albums} />
    </div>
  );

  //   return (
  //     <div>
  //       <h1>Home</h1>
  //       <div className="home-playList">
  //         <h1>Top 5 Playlists</h1>
  //         <div>
  //           <ul className="list-wrapper">
  //             <Playlist />
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="home-artists">
  //         <h1>Top 5 Artists</h1>
  //         <div>
  //           <ul className="list-wrapper">
  //             {data.map((artist) => {
  //               return (
  //                 <li key={artist.artistName}>
  //                   <img width="200px" src={artist.img} />
  //                   <h2>{artist.artistName}</h2>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="home-songs">
  //         <h1>Top 5 Songs</h1>
  //         <div>
  //           <ul className="list-wrapper">
  //             {data.map((artist) => {
  //               return artist.albums.map((album) => {
  //                 return album.songsList.map((song) => {
  //                   return (
  //                     <li key={song.name}>
  //                       <img width="200px" src={album.img} />
  //                       <h2>{song.name}</h2>
  //                     </li>
  //                   );
  //                 });
  //               });
  //             })}
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="home-albums">
  //         <h1>Top 5 Albums</h1>
  //         <div>
  //           <ul className="list-wrapper">
  //             {data.map((artist) => {
  //               return artist.albums.map((album) => {
  //                 return (
  //                   <li key={album.name}>
  //                     <img width="200" src={album.img} />
  //                     <h2>{album.name}</h2>
  //                   </li>
  //                 );
  //               });
  //             })}
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
