import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const onPlay = ({ seconds }) => {
    localStorage.setItem('videoplayer - current - time', seconds);
};

const onCurrentTime = () => {
    player.on('timeupdate', throttle(onPlay, 1000));

    const currentSeconds = localStorage.getItem('videoplayer - current - time');

    if (currentSeconds) {
        player.setCurrentTime(currentSeconds);
    }
};
onCurrentTime();
