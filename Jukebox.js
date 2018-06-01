function Play() {
  document.querySelector(".example").play();
  console.log("play called");
}

function Pause() {
  document.querySelector(".example").pause();
}

function Add() {
  var songUrl = document.querySelector("addurl").value;

}

function Jukebox() {
  this.audioSources = ["https://www.bensound.com/bensound-music/bensound-betterdays.mp3","https://www.bensound.com/bensound-music/bensound-dubstep.mp3"];
  this.audioPlayer = document.querySelector(".example");
}