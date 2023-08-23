/* eslint-disable react/jsx-key */
'use client'

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./responsive.css";
import Movie from "./movie";
import { SUBTITLE_FILES_EXTENSION } from "../lib/constants";

export default function ResponsiveCarousel({movieList}) {
    let count = 0;

    return (
      <div className={styles.container}>
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          dynamicHeight={false}
          className={styles.mySwiper}
        >
          {movieList.map((item) => (
            count++,
              <div className={styles.swipItem}>
                <div className={styles.imgBox}>
                    <Movie width="360" height="240" name={item} track={count + SUBTITLE_FILES_EXTENSION}></Movie>
                </div>
                <div className={styles.detail}>
                  <h2>{item}</h2>
                  {/* <p>{item.text}</p> */}
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }