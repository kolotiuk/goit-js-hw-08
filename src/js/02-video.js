import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currTime = () => {
  const savedStorage = localStorage.getItem(STORAGE_KEY);

  if (savedStorage) {
    player.setCurrentTime(savedStorage);
  }
};
currTime();
