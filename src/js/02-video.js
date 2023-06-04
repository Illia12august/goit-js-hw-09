import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const timeData = ({ seconds }) => {
  const currentTime = localStorage.setItem('videoplayer-current-time', seconds);
};
player.on('timeupdate', throttle(timeData, 1000));
const nowTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(nowTime);
