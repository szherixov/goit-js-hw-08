import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const VIDEO_KEY = 'videoplayer-current-time';

const playMuvie = function (data) {
  const time = JSON.stringify(data.seconds);
  localStorage.setItem(VIDEO_KEY, time);
  console.log('played the video!', time);
};
player.on('timeupdate', throttle(playMuvie, 1000));

const applicationTime = localStorage.getItem(VIDEO_KEY);

player
  .setCurrentTime(applicationTime)
  .then(function (seconds) {
  
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

