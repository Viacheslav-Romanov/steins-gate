'use server'
import * as fs from 'fs/promises';
import * as path from 'path';
import {SUBTITLE_FILES_EXTENSION, 
    VIDEO_FILES_EXTENSION, 
    VIDEO_FILES_PATH} 
from './lib/constants';

export async function getSelectedMovie() {
    return selectedMovie;
}


export async function getMovies() {
    let movies = [];
    let count = 0;

    try {
        let files = await fs.readdir(VIDEO_FILES_PATH);
        // console.log("\Filenames with the .mp4 extension:");
        files.forEach(file => {
            if (path.extname(file) == VIDEO_FILES_EXTENSION) {
                count++;
                movies.push({name:file,track:count + SUBTITLE_FILES_EXTENSION});
            }
        });
        // movies = files;
    } catch(err) {
        console.log(err);
    }
    return movies;
}