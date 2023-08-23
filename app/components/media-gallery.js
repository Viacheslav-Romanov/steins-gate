'use client'
// import MovieList from './movie-list';
import SelectedMovie from './selected-movie';
// import ResponsiveCarousel from './carousel';
import ElasticCarousel from './elastic-carousel';
import {useState} from 'react';


export default function MediaGallery({movies}) {

    const [selectedMovie, setSelectedMovie] = useState({
        name: '[DeadFish] Steins;Gate - 01 [BD][720p][AAC].mp4',
        track: '1.vtt'
    });

    return (
        <div>
            <SelectedMovie movie={selectedMovie}></SelectedMovie>
            {/* <ResponsiveCarousel movieList={movies}/> */}
            <ElasticCarousel movieList={movies} selected={selectedMovie} setSelectedMovie={setSelectedMovie}/>
            {/* <MovieList selected={selectedMovie}></MovieList> */}
        </div>
    )
}