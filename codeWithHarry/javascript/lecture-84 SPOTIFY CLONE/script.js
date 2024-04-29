console.log("Hello everyone");
let currentSong = new Audio();

function timeFormat(sec) {
  let hour = Math.floor(sec / 3600);
  let minute = Math.floor((sec % 3600) / 60);
  sec = Math.floor(sec % 60);

  // Pad with leading zeros if necessary
  minute = minute < 10 ? "0" + minute : minute;
  sec = sec < 10 ? "0" + sec : sec;

  // Format time
  if (hour > 0) {
    hour = hour < 10 ? "0" + hour : hour;
    return `${hour}:${minute}:${sec}`;
  } else {
    return `${minute}:${sec}`;
  }
}

async function getsongs() {
  let a = await fetch("http://127.0.0.1:5500/assests/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;

  let song_data = div.getElementsByTagName("a");

  let songs = [];
  for (let i = 0; i < song_data.length; i++) {
    if (song_data[i].href.endsWith(".mp3")) {
      songs.push(song_data[i].href.split("/songs/")[1]);
    }
  }
  console.log(songs);
  return songs;
}

function playMusic(track, pause= false) {
  currentSong.src = "/assests/songs/" + track;
  if(!pause){
      currentSong.play();
    
  }
  document.querySelector(".playbar-play").src =
    "assests/images/playbarIcons/pause.svg";

  // show name of song in play-bar
  songName.innerHTML = track;
  songDuration.firstElementChild.innerHTML=`00:00 / 00:00`;
}

async function main() {
  //calling fn to get songs
  let songs = await getsongs();

  // showing all the songs in library
  let songList = document
    .querySelector(".library-songs")
    .getElementsByTagName("ul")[0];
  for (const key in songs) {
    songList.innerHTML += `<li>
              <div class="song-card-lib ">
                <div class="music-icon">
                  <img class="invert" src="assests/images/music.png" alt="">
                </div>
                <div class="song-detail-lib">
                  <h4>
                    ${songs[key]}
                  </h4>
                </div>
                  <div class="playnow">
                    <img class="invert" width="25" src="assests/images/play-arrow-svgrepo-com.svg" alt="">
                    PlayNow
                  </div>
              </div>
            </li>`;
  }

  playMusic(songs[0],true);
  
  play.src = "assests/images/playbarIcons/play.svg";


  // attaching event listener to all liberary_cards
  Array.from(document.querySelectorAll(".song-card-lib")).forEach((e) => {
    e.addEventListener("click", () => {
      console.log(
        e.querySelector(".song-detail-lib").firstElementChild.innerHTML.trim()
      );
      playMusic(
        e.querySelector(".song-detail-lib").firstElementChild.innerHTML.trim()
      );
    });
  });

  // click pause and play

  play.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      play.src = "http://127.0.0.1:5500/assests/images/playbarIcons/pause.svg";
    } else {
      play.src = "http://127.0.0.1:5500/assests/images/playbarIcons/play.svg";
      currentSong.pause();
    }
  });

  //Updating duration of song by adding eventlistener(timeupdate)

  currentSong.addEventListener("timeupdate", () => {
    songDuration.firstElementChild.innerHTML =
      timeFormat(currentSong.currentTime) +
      "/" +
      timeFormat(currentSong.duration);

      myCircle.style.left = (currentSong.currentTime / currentSong.duration)*100 +"%"

  });

  // adding event listener for seekbar
  document.querySelector(".seekBar").addEventListener("click", (e)=>{
    let percentage=(e.offsetX / e.target.getBoundingClientRect().width) *100
    myCircle.style.left = percentage +"%"
    currentSong.currentTime= (percentage*currentSong.duration)/100
  })
}
main();
