import { useRef } from "react";

export const Search = ({ fn }) => {
  const artist = useRef();
  return (
    <div className="d-flex justify-content-center ">
      <div style={{width: '30%'}}>
        <input
          ref={artist}
          type="text"
          className="form-control"
          style={{borderRadius: '0'}}
          placeholder="Type here to search songs....."
        />
      </div>
      <div>
        <button
          className="btn btn-success"
          style={{borderRadius: '0'}}
          onClick={() => {
            fn(artist.current.value);
          }}
        >
          Search It
        </button>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
