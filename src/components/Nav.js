import React from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Album from "./Album";
import Albums from "./Albums";
import Artist from "./Artist";
import Artists from "./Artists";
import ErrorBoundary from "./ErrorBoundary";
import NotFound from "./NotFound";
import Playlist from "./Playlist";
import Playlists from "./Playlists";
import Song from "./Song";

//---- dataBases ----//
import albums from "../dataBase/albums";
import artists from "../dataBase/artists";
import playlists from "../dataBase/playlists";
import songs from "../dataBase/songs";

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
          <Home
            songs={topFiveSongs}
            playlists={topFivePlaylists}
            artists={topFiveArtists}
            albums={topFiveAlbums}
          />
        </Route>
        <Route exact path="/playlist">
          <Playlists list={playlists} />
        </Route>
        <Route exact path="/playlist/:id">
          <Playlist list={playlists} songs={songs} />
        </Route>
        <Route exact path="/artist">
          <Artists list={artists} />
        </Route>
        <Route exact path="/artist/:id">
          <Artist list={artists} albums={albums} songs={songs} />
        </Route>
        <Route exact path="/album">
          <Albums list={albums} />
        </Route>
        <Route exact path="/album/:id">
          <Album list={albums} artists={artists} songs={songs} />
        </Route>
        <Route exact path="/song">
          <Song list={songs} />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
