function Play() {
  document.querySelector(".example").play();
  console.log("play called");
}

function Pause() {
  document.querySelector(".example").pause();
}

function PlayUrl() {
  var songUrl = document.querySelector("#playurl").value;
  document.querySelector(".example").src = songUrl;
  Play();

}

function Jukebox() {
  this.audioSources = ["https://www.bensound.com/bensound-music/bensound-betterdays.mp3","https://www.bensound.com/bensound-music/bensound-dubstep.mp3"];
  this.audioPlayer = document.querySelector(".example");
  this.addSong = function(url) {
    audioPlayer.src = url;
    audioPlayer.play();
  }
}