var audio = {
  music: new Audio(
    'http://www.orangefreesounds.com/wp-content/uploads/2014/11/All-mp3.mp3'
  ),

  play: function() {
    this.music.play();
    this.music.loop = true;
  },

  stop: function() {
    this.music.pause();
    this.music.currentTime = 0;
  },
};

export default audio;
