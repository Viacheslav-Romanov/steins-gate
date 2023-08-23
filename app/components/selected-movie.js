'use client'
import Movie from "./movie";
import styles from "./selected-movie.css";
import { useEffect } from "react";
import {addFuriganaToSubtitles, addVideoControlsShortcuts} from "../lib/util";
export default function SelectedMovie({ movie }) {
    // console.log('movie=',movie);

    useEffect(() => {
        addFuriganaToSubtitles();
        addVideoControlsShortcuts();
    });
    

    return (
        <div id="video" className="wrapper">
            <Movie width="720" height="360" name={movie.name} track={movie.track}></Movie>
            <div id="subtitles"></div>
        </div>
    );
}