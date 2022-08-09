import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = data => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(currentTime);
