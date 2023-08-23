import KuromojiAnalyzer from "../../public/kuroshiro-analyzer-kuromoji.min.js";
import * as Kuroshiro from "../../public/kuroshiro.min.js";
import {
  PATH_TO_DICT_FILES, 
  VIDEO_ELEMENT_SELECTOR, 
  VIDEO_ELEMENT_ID,
  SUB_TRACK_ELEMENT_SELECTOR,
  SUB_DISPLAY_ELEMENT_ID
} from "./constants";

export function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    // if (document.getElementById(elmnt.id + "header")) {
    //   // if present, the header is where you move the DIV from:
    //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    // } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    // }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
}

export function addFuriganaToSubtitles() {
  const kuroshiro = new Kuroshiro.default(); 
  kuroshiro.init(new KuromojiAnalyzer({dictPath: PATH_TO_DICT_FILES}));

  const videoElement = document.getElementById(VIDEO_ELEMENT_ID)
                          .querySelector(VIDEO_ELEMENT_SELECTOR);
  const trackElement = videoElement.querySelector(SUB_TRACK_ELEMENT_SELECTOR);
  const subtitlesElement = document.getElementById(SUB_DISPLAY_ELEMENT_ID);
  dragElement(subtitlesElement);

  subtitlesElement.innerHTML = '';
  videoElement.textTracks[0].mode = 'hidden';
  // Listen for the cuechange event.
  // Check if there are active cues and use them as value.
  trackElement.addEventListener('cuechange', event => {
      const currentCues = event.target.track.activeCues;
      if (currentCues.length) {
          kuroshiro.convert(currentCues[0].text, { mode:"furigana", to: "hiragana" })
              .then(function(result){
                  subtitlesElement.innerHTML = result;
              });
      } else {
          subtitlesElement.innerHTML = '';
      }
  });
}

export function addVideoControlsShortcuts() {
  window.addEventListener('keydown', e => {
    e.preventDefault();

    if (e.key  === "ArrowLeft") { 
            //Left
            videoElement.currentTime -= 2;
            console.log("ArrowLeft");
    } else if (e.key === "ArrowRight") { 
            //Right
            videoElement.currentTime += 2;
            console.log("ArrowRight");
    } else if (e.key === " ") {
        if(videoElement.paused === true) videoElement.play();
        else videoElement.pause();
        console.log("Space");
    }
  });
}