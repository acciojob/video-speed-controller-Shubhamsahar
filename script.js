const player = document.querySelector('.player');
const video = player.querySelector('.player__video');
const playButton = player.querySelector('.toggle');
const volumeSlider = player.querySelector('input[name="volume"]');
const playbackSpeedSlider = player.querySelector('input[name="playbackRate"]');
const skipBackwardButton = player.querySelector('.skip-backward');
const skipForwardButton = player.querySelector('.skip-forward');
const progressBar = player.querySelector('.progress__filled');

video.addEventListener('timeupdate', updateProgressBar);
playButton.addEventListener('click', togglePlay);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);
skipBackwardButton.addEventListener('click', skipBackward);
skipForwardButton.addEventListener('click', skipForward);

function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playButton.textContent = '►';
    }
}

function updateProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
}

function updateVolume() {
    video.volume = volumeSlider.value;
}

function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedSlider.value;
}

function skipBackward() {
    video.currentTime -= 10;
}

function skipForward() {
    video.currentTime += 25;
}
