'use client'
export default function Movie({ width=720, height=480, name, track }) {
    return (
        <div>
            <video controls width={width} height={height} key={name}>
                <source src={name} type="video/mp4" />
                <track label="Japanese" kind="subtitles" srclang="ja" src={track} default />
            </video>
        </div>
    );
}