function PlayUrl() {
  var songUrl = document.querySelector("#playurl").value;
  myJukebox.playSong(songUrl);
}

function AddUrl() {
  var songUrl = document.querySelector("#playurl").value;
  myJukebox.addSong(songUrl);
}

function Jukebox() {
  this.audioSources = ["https://www.bensound.com/bensound-music/bensound-betterdays.mp3","https://www.bensound.com/bensound-music/bensound-dubstep.mp3"];
  this.audioPlayer = document.querySelector(".player");
  this.currentSong = 0;
  this.audioPlayer.src = this.audioSources[this.currentSong];
  this.play = function() {
    this.audioPlayer.play();
  }
  this.pause = function() {
    this.audioPlayer.pause();
  }
  this.playSong = function(url) {
    this.audioPlayer.src = url;
    this.audioPlayer.play();
  }
  this.nextSong = function(){
    this.audioPlayer.src = this.audioSources[++this.currentSong];
    this.audioPlayer.play();
  }
  this.prevSong = function(){
    if(this.currentSong > 0){
      this.audioPlayer.src = this.audioSources[--this.currentSong];
      this.audioPlayer.play();
    }
    
  }
  this.addSong = function(url){
    this.audioSources.push(url);
  }
}

var myJukebox = new Jukebox();