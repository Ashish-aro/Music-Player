export const Song = ({ fn, song }) => {
  console.log("object", song);
  const showPlayer = () => {
    fn(true, song);
  };

  return (
    <div className="text-center" style={{width: '20%'}}>
      <div className="d-flex flex-column justify-content-center py-4 px-2 border border-red-500 align-items-center">
        <div id="image">
          <img
            className="rounded-circle"
            style={{height: '150px',width: '150px'}}
            src={song.artworkUrl100}
            alt=""
          />
        </div>
        <br />
        <div style={{width:'200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow:'ellipsis'}} id="names">
          <span>{song.trackName}</span><br />
          <small>{song.artistName}</small>
        </div>
        <br />
        <div className="" id="playbutton">
          <button className="btn btn-primary" onClick={showPlayer}>
            Play Song
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
