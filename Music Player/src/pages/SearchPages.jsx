import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/Player";
import { Link } from "react-router-dom";

export const SearchPage = () => {
  const [allSongs, setSongs] = useState([]);
  const [flag, setFlag] = useState(false);
  const [song, setPlayerSong] = useState(null);
  //Component Life Cycle
  const loadSongs = async () => {
    setSongs(await getSongs("Bollywood"));
  };
  useEffect(() => {
    loadSongs();
  }, []);

  const togglePlayer = (flag, returnedSong) => {
    setPlayerSong(returnedSong);
    setFlag(flag);
  };

  const getArtistName = async (artistName) => {
    setSongs(await getSongs(artistName));
  };

  const jsx = (
    <>
      <Search fn={getArtistName} />
      <Songs fn={togglePlayer} allSongs={allSongs} />
    </>
  );

  return (
    <div>
      <div className="d-flex justify-content-between alert alert-info align-items-center" style={{ borderRadius: "0" }}>
        <h1
        >
          Music Player
        </h1>

        <div className="d-flex gap-5 ">
          <Link className="text-decoration-none light" to='/homePage'>Home</Link>
          <Link className="text-decoration-none light" to='/singIn'>SignIn</Link>
          <Link className="text-decoration-none light" to='/signUp'>SignUp</Link>
        </div>
      </div>
      <br />
      {flag ? <Player fn={togglePlayer} song={song} /> : jsx}
    </div>
  );
};
