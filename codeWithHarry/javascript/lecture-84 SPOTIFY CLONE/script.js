console.log("Hello everyone");
let currentSong = new Audio();
let currentFolder;

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

function playMusic(track, pause = false) {
  currentSong.src = `/assests/songs/${currentFolder}/` + track;
  console.log(`test2 `, currentSong);
  if (!pause) {
    currentSong.play();
  }
  document.querySelector(".playbar-play").src =
    "assests/images/playbarIcons/pause.svg";

  // show name of song in play-bar
  songName.innerHTML = track;
  songDuration.firstElementChild.innerHTML = `00:00 / 00:00`;
}

async function main() {
  //calling fn to get songs
  folders = await getfolders();
  if(currentFolder==undefined){

    currentFolder = folders[0];
  }
  
 
  
  let songs = await getsongs();

  // showing all the songs in library
  let songList = document
    .querySelector(".library-songs")
    .getElementsByTagName("ul")[0];
    songList.innerHTML=" ";
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
  let folderList = document.querySelector(".cardContainer");
  folderList.innerHTML=" "
  for (const key in folders) {
    // getting jason
    let a = await fetch(
      `http://127.0.0.1:5501/assests/songs/${folders[key]}/info.json`
    );
    let b = await a.json();
    console.log(b);
    folderList.innerHTML += ` <div class="card brdr-rad1 pointer flex flexColumn  center">
          <div class="card-image relative ">
            <div class="playContainer">
              <img class="playbtn" src="assests/images/playButton.svg" alt="">

            </div>
            <img class="brdr-rad1" src="https://i.scdn.co/image/ab67706f000000029a03d5fd9d0bdb8065496b18" alt="">
          </div>
          <div class="song-details p-l1 p-r1">
            <h2>${folders[key]}</h2>
            <p class="about-song greyColor">${b.discipt}</p>
          </div> 
        </div>`;
  }

  
  playMusic(songs[0], true);

  play.src = "assests/images/playbarIcons/play.svg";

  let currentIndex = songs.indexOf(
    currentSong.src.split("/songs/")[1].replaceAll("%20", " ").split("/")[1]
  );
  
  
  
  
  
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
      console.log(`clicked on pause`);
      
      currentSong.play();
      play.src = "http://127.0.0.1:5501/assests/images/playbarIcons/pause.svg";
    } else {
      play.src = "http://127.0.0.1:5501/assests/images/playbarIcons/play.svg";
      currentSong.pause();
    }
  });

  //Updating duration of song by adding eventlistener(timeupdate)

  currentSong.addEventListener("timeupdate", () => {
    
     songDuration.firstElementChild.innerHTML =
      timeFormat(currentSong.currentTime) +
      "/" +
      timeFormat(currentSong.duration);

     myCircle.style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  // adding event listener for seekbar
  document.querySelector(".seekBar").addEventListener("click", (e) => {
    let percentage = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    myCircle.style.left = percentage + "%";
    currentSong.currentTime = (percentage * currentSong.duration) / 100;
  });

  // adding event listener to prevButton
  prev.addEventListener("click", () => {
    if (currentIndex > 0) {
      console.log(songs[--currentIndex]);
      playMusic(songs[currentIndex]);
    }
  });

  //adding event listener to nextButton
  next.addEventListener("click", () => {
    if (currentIndex < songs.length - 1) {
      console.log(songs[++currentIndex]);
      playMusic(songs[currentIndex]);
    }
  });

  // adding event listener to hamBurger
  myHam.addEventListener("click", () => {

    document.querySelector(".left").style.left = "0";
    document.querySelector(".left").style.flexBasis = "50%";
    document.querySelector(".right").style.flexBasis = "0%";
  });

  // adding event listener to volume rnage
  volRange.addEventListener("change", (e) => {
    console.log(parseInt(e.target.value) / 100);
    currentSong.volume = parseInt(e.target.value) / 100;
  });

  // adding event listener to all folders
    // console.log(Array.from(document.querySelectorAll(".card")));
    
    let folderArray = Array.from(document.querySelectorAll(".card"));
    console.log(folderArray[0].querySelector(".song-details"));
    
    folderArray.forEach((e)=>{   
        e.addEventListener("click",()=>{
        
            console.log(folders.indexOf(e.querySelector(".song-details").firstElementChild.innerHTML));
            currentFolder = folders[folders.indexOf(
              e.querySelector(".song-details").firstElementChild.innerHTML
            )]
            main()

            // console.log(`I am being clicked at index of this folder`);
          
        })
      
    })

  
  
}

async function getfolders() {
  let a = await fetch("http://127.0.0.1:5501/assests/songs/");
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let folders = [];
  let allas = Array.from(div.getElementsByTagName("a"));
  for (let i = 0; i < allas.length; i++) {
    if (allas[i].href.includes("/assests/songs/")) {
      folders.push(allas[i].href.split("/songs/")[1].replace("%20", " "));
    }
  }
  console.log("folders ", folders);
  return folders;
}

async function getsongs() {
  console.log(currentFolder);
  
  let a = await fetch(`http://127.0.0.1:5501/assests/songs/${currentFolder}`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;

  let song_data = div.getElementsByTagName("a");

  let songs = [];
  for (let i = 0; i < song_data.length; i++) {
    if (song_data[i].href.endsWith(".mp3")) {
      songs.push(
        song_data[i].href
          .split(`${currentFolder.replace(" ", "%20")}/`)[1]
          .replaceAll("%20", " ")
      );
    }
  }
  console.log("songs", songs);
  return songs;
}



// ADDING EVENT LISTERNER TO PLAY BUTTON

main();
