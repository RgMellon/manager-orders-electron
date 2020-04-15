import ring from './ring.mp3';

var audio = {
  music: new Audio(ring),

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
