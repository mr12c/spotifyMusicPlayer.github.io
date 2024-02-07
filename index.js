let audio = new Audio("1.mp3");
console.log(audio);
let Play = document.getElementsByClassName("play")[0];
let isLoopOn = false;
let songNumber = 1;
let loop=document.querySelector('.ri-loop-right-line');
let forward = document.querySelector(".forward");
let backward = document.querySelector(".backward");
console.log(backward);
console.log(forward);
// backward.classList.add('disabled');
let i = 1;
let songDetails = [
  {
    songName: "Mahiye jina sona",
    songUrl: "1.mp3",
    isLike: false,
    isPlaying: false,
    artistName: "Darshan Raval",
    rgbx:254,
    rgby:54,
    rgbz:14,
    imageUrl:"https://c.saavncdn.com/122/Mahiye-Jinna-Sohna-Hindi-2023-20230801104702-500x500.jpg",
  },
  {
    songName: "Sari duniya jala denge",
    songUrl: "2.mp3",
    isLike: false,
    isPlaying: false,
    artistName: "B-Prak",
    imageUrl:"https://i.scdn.co/image/ab67616d0000b2735f3ede47954a93aa03efe5f9",
    rgbx:245,
    rgby:184,
    rgbz:2,
  },
  {
    songName: "Ram Ayenge",
    songUrl: "3.mp3",
    isLike: false,
    isPlaying: false,
    rgbx:184,
    rgby:27,
    rgbz:245,

    artistName: "swati mishara",
    imageUrl:"https://i.scdn.co/image/ab67616d00001e02103890cd93d2c659fb899aff"
  },
  {
    songName: "Tera Zikra",
    songUrl: "4.mp3",
    isLike: false,
    isPlaying: false,
    artistName: "Darshan Raval",
    rgbx:69,
    rgby:14,
    rgbz:78,
    imageUrl:"https://c.saavncdn.com/820/Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg"
  },
  {
    songName: "Maan Meri Jaan",
    songUrl: "5.mp3",
    isLike: false,
    isPlaying: false,
    artistName: "King",
    rgbx:28,
    rgby:131,
    rgbz:52,
    imageUrl:"https://c.saavncdn.com/734/Champagne-Talk-Hindi-2022-20221008011951-500x500.jpg"

  },
  {
    songName: "Malang sajna",
    songUrl: "6.mp3",
    isLike: false,
    isPlaying: false,
    rgbx:104,
    rgby:7,
    rgbz:239,
    artistName: "Sachet Tondon",
    imageUrl:"https://c.saavncdn.com/303/Malang-Sajna-Hindi-2022-20230403132803-500x500.jpg"
  },
];

let addcredit = (i) => {
  console.log(i);
  document.querySelector(".song-name").innerHTML = songDetails[i - 1].songName;
  console.log(songDetails[i - 1].songName);
  console.log(document.querySelector(".song-name"));
  if (!songDetails[i - 1].isLike) {
    likeBtn.style = "color:white;";
  } else {
    likeBtn.style = "color:red";
  }
  document.querySelector(".artist-name").innerHTML =
    songDetails[i - 1].artistName;
    document.querySelector(".cover").src=songDetails[i-1].imageUrl
    document.querySelector(".music-player-box").style=`background:linear-gradient( rgba(${songDetails[i-1].rgbx},${songDetails[i-1].rgby},${songDetails[i-1].rgbz}) , black 60%)`;
};

////////

/////////////////

let playNextSong = () => {
  if (i == 5) {
    forward.classList.add("disabled");
    audio.currentTime = 0;
    audio.src = `${++i}.mp3`;
    audio.play();
  } else if (i == 6) {
    forward.classList.remove("disabled");
    i = 1;
    audio.currentTime = 0;
    audio.src = `${i}.mp3`;
    audio.play();
  } else {
    forward.classList.remove("disabled");
    backward.classList.remove("disabled");
    audio.currentTime = 0;
    audio.src = `${++i}.mp3`;
    audio.play();
  }
};
////////////////
let playforward=()=>{
    audio.currentTime = 0;

    if (i >= 1 && i <= 5) {
      audio.src = `${++i}.mp3`;
      audio.play();
      addcredit(i);
    } else {
      audio.src = `${i}.mp3`;
      audio.play();
      addcredit(i);
    }
     
}
let playBack=()=>{
    audio.currentTime = 0;
    if (i <= 1) {
      audio.src = `${i}.mp3`;
      audio.play();
      addcredit(i);
    } else if (i >= 2 && i <= 6) {
      audio.src = `${--i}.mp3`;
      audio.play();
      addcredit(i);
    } 
}
let playSame=()=>{

     audio.currentTime = 0;
      audio.src = `${i}.mp3`;
      audio.play();
      addcredit(i);
   
}

//////////////
let musicRange = document.querySelector("#music-range");
console.log(musicRange);
audio.pause();
audio.addEventListener("timeupdate", (e) => {
  console.log(e);

  console.log(audio.currentTime);
  console.log(audio.duration);
  musicRange.value = (audio.currentTime * 100) / audio.duration;
  if (audio.currentTime === audio.duration) {
   if(!isLoopOn){
     playforward();
   }
   else{
    playSame();
   }
  }
  if (audio.paused) {
    Play.classList.add("fa-circle-play");
    Play.classList.remove("fa-circle-pause");
  } else {
    Play.classList.remove("fa-circle-play");
    Play.classList.add("fa-circle-pause");
  }
});
musicRange.addEventListener("change", () => {
  audio.currentTime = (musicRange.value * audio.duration) / 100;
});
console.log(audio.src);
console.log(audio.duration);
//////////////////////
 
forward.addEventListener("click", (e) => {
 playforward();
});
//////////////////////
 
//////////////////
backward.addEventListener("click", (e) => {
  playBack();
   
});
/////////////////////

Play.addEventListener("click", (e) => {
  console.log(e);
  if (audio.paused) {
    audio.play();
    Play.classList.add("fa-circle-pause");
    Play.classList.remove("fa-circle-play");
    // Play.classList.remove('fa-circle-pause')
  } else {
    audio.pause();
    Play.classList.remove("fa-circle-pause");
    Play.classList.add("fa-circle-play");
  }
});
let likeBtn = document.querySelector(".fa-heart");
let storeit = (i) => {
  if (!songDetails[i - 1].isLike) {
    likeBtn.style = "color:red;";
    songDetails[i - 1].isLike = true;
  } else {
    likeBtn.style = "color:white;";
    songDetails[i - 1].isLike = false;
  }
};

likeBtn.addEventListener("click", () => {
  storeit(i);
});
loop.addEventListener('click',(e)=>{
if(!isLoopOn){
    e.target.style="color:green;"
    isLoopOn=true;

}
else{
    e.target.style='color:white'
    isLoopOn=false;
}
})