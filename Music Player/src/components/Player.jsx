export const Player = ({ fn, song }) => {
  return (
    <div className="align-items-center text-center d-flex justify-content-center">
      <div className="border border-2 w-25">
        <div className="text-start">
          <button
            className="btn btn-success w-auto"
            style={{
              backgroundColor: "transparent",
              color: "grey",
              border: "none",
            }}
            onClick={() => {
              fn(false, null);
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-left-circle m-3"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </button>
        </div>
        <img className="h-50 w-50" src={song.artworkUrl100} alt="" />
        <br />
        <br />
        <span className="fs-4">{song?.trackName}</span> <br />
        <small>{song?.artistName}</small>
        <br />
        <br />
        <audio controls>
          <source src={song?.previewUrl} type="" />
          Your browser doesn't support audio element.
        </audio>
        <br />
        <br />
      </div>
    </div>
  );
};
