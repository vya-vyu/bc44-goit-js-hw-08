import Player from '@vimeo/player';

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function(data) {
    console.log('played the video!');
    console.log(data)
});
