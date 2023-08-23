/* eslint-disable react/jsx-key */
'use client'
import Carousel from "react-elastic-carousel";
import styles from "./elastic.css";
import Movie from "./movie";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

export default function ElasticCarousel({movieList, selected, setSelectedMovie}) {
    return (
      <div className={styles.contWrapper}>
        <Carousel breakPoints={breakPoints}>
          {movieList.map((item) => (
            <div className={styles.card} onClick={e => {e.preventDefault(),console.log('clicked ', item),setSelectedMovie(item)}}>
              {(item.name === selected.name) ? 
                <div style={{background: "#a9224c", padding: "5px", width: "fit-content"}}><Movie width="360" height="240" name={item.name} track={item.track}></Movie></div>
              : 
                <Movie width="360" height="240" name={item.name} track={item.track}></Movie>}
              <div className={styles.title}>
                <h3>{item.name.replace("[DeadFish] ", "").replace(" [BD][720p][AAC].mp4", "")}</h3>
              </div>
            </div>
            ))}
        </Carousel>
      </div>
    );
  }