import {getMovies} from '../actions'
import Movie from './movie'

export default async function MovieList({selected}) {
    let movies = await getMovies();
    console.log(movies);
    let count = 0;
    console.log(selected);

    return (
        <div>
        {movies.map((m) => (
            count++,
            (m === selected.name) ? 
                <div style={{background: "#a9224c", padding: "5px", width: "fit-content"}}><Movie width="360" height="240" name={m} track={count + '.vtt'}></Movie></div>
            : 
                <Movie width="360" height="240" name={m} track={count + '.vtt'}></Movie>
            
        ))}
        </div>
    );
}