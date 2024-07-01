import { Song } from "./Song"

export const Songs = ({fn, allSongs }) => {

console.log(allSongs)

    return (
        <div className="d-flex flex-wrap justify-content-center gap-5">
            {allSongs && allSongs.map((currentSong, index) => { return <Song fn={fn} key={index} song={currentSong} /> })}
        </div>
    );
}