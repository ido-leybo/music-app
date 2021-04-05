import React, { lazy, Suspense } from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import Album from "./Album";
// import Albums from "./Albums";
// import Artist from "./Artist";
// import Artists from "./Artists";
// import Playlist from "./Playlist";
// import Playlists from "./Playlists";
// import Song from "./Song";
// import Songs from "./Songs";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";

//---- dataBases ----//
import albums from "../dataBase/albums";
import artists from "../dataBase/artists";
import playlists from "../dataBase/playlists";
import songs from "../dataBase/songs";
//---- Lazy ----//

const Home = lazy(() => import("./Home"));
const Album = lazy(() => import("./Album"));
const Albums = lazy(() => import("./Albums"));
const Artist = lazy(() => import("./Artist"));
const Artists = lazy(() => import("./Artists"));
const Playlist = lazy(() => import("./Playlist"));
const Playlists = lazy(() => import("./Playlists"));
const Song = lazy(() => import("./Song"));
const Songs = lazy(() => import("./Songs"));

const songsWithImages = songs.map((song) => {
  const { cover_img } = albums.find((album) => album.name === song.album);
  song.cover_img = cover_img;
  return song;
});

const topFiveSongs = songsWithImages.slice(0, 5);
const topFiveAlbums = albums.slice(0, 5);
const topFivePlaylists = playlists.slice(0, 5);
const topFiveArtists = artists.slice(0, 5);

export default function Nav() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <nav className="nav-bar">
          <NavLink
            className="nav-bar-item"
            activeStyle={{ backgroundColor: "black" }}
            exact
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="nav-bar-item"
            activeStyle={{ backgroundColor: "black" }}
            exact
            to="/playlist"
          >
            Playlists
          </NavLink>
          <NavLink
            className="nav-bar-item"
            activeStyle={{ backgroundColor: "black" }}
            exact
            to="/artist"
          >
            Artists
          </NavLink>
          <NavLink
            className="nav-bar-item"
            activeStyle={{ backgroundColor: "black" }}
            exact
            to="/album"
          >
            Albums
          </NavLink>
          <NavLink
            className="nav-bar-item"
            activeStyle={{ backgroundColor: "black" }}
            exact
            to="/song"
          >
            Songs
          </NavLink>
        </nav>
      </ErrorBoundary>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<div>Loading...</div>}>
            <Home
              songs={topFiveSongs}
              playlists={topFivePlaylists}
              artists={topFiveArtists}
              albums={topFiveAlbums}
            />
          </Suspense>
        </Route>
        <Route exact path="/playlist">
          <Suspense fallback={<div>Loading...</div>}>
            <Playlists list={playlists} />
          </Suspense>
        </Route>
        <Route exact path="/playlist/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <Playlist list={playlists} songs={songs} />
          </Suspense>
        </Route>
        <Route exact path="/artist">
          <Suspense fallback={<div>Loading...</div>}>
            <Artists list={artists} />
          </Suspense>
        </Route>
        <Route exact path="/artist/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <Artist list={artists} albums={albums} songs={songs} />
          </Suspense>
        </Route>
        <Route exact path="/album">
          <Suspense fallback={<div>Loading...</div>}>
            <Albums list={albums} />
          </Suspense>
        </Route>
        <Route exact path="/album/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <Album list={albums} songs={songs} />
          </Suspense>
        </Route>
        <Route exact path="/song">
          <Suspense fallback={<div>Loading...</div>}>
            <Songs list={songs} />
          </Suspense>
        </Route>
        <Route exact path="/song/:id">
          <Suspense fallback={<div>Loading...</div>}>
            <Song list={songs} />
          </Suspense>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
