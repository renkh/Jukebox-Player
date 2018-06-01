function PlayUrl() {
  var songUrl = document.querySelector("#playurl").value;
  myJukebox.playSong(songUrl);
}

function AddUrl() {
  var songUrl = document.querySelector("#playurl").value;
  myJukebox.addSong(songUrl);
}

function Jukebox() {
  //array, stores links to mp3 files
  this.audioSources = ["https://www.bensound.com/bensound-music/bensound-betterdays.mp3","https://www.bensound.com/bensound-music/bensound-dubstep.mp3"];
  //connects Jukebox to audio player with specified class
  this.audioPlayer = document.querySelector(".player");
  //index of the current song, def val = 0
  this.currentSong = 0;
  //update src of audio to the player, using current song as index
  this.audioPlayer.src = this.audioSources[this.currentSong];
  //play functionality
  this.play = function() {
    this.audioPlayer.play();
  }
  //pause
  this.pause = function() {
    this.audioPlayer.pause();
  }
  //changes the src of audio using a user provided url, plays audio
  this.playSong = function(url) {
    this.audioPlayer.src = url;
    this.audioPlayer.play();
  }
  //plays the next song, increments currentSong to access the next item in array
  this.nextSong = function(){
    this.audioPlayer.src = this.audioSources[++this.currentSong];
    this.audioPlayer.play();
  }
  //plays the previous song, decrements currentSong to the access the prev item in the array
  this.prevSong = function(){
    if(this.currentSong > 0){
      this.audioPlayer.src = this.audioSources[--this.currentSong];
      this.audioPlayer.play();
    }
  }
  //adds a song to the array, url provided by user
  this.addSong = function(url){
    this.audioSources.push(url);
  }
}

//create an instance of a Jukebox
var myJukebox = new Jukebox();
