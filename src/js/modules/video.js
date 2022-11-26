const video = (wrapper, videoWrapper) => {
  const playClassName = 'playing';

  const videoElems = {
    buttons: document.querySelectorAll('[data-play]'),
    video: document.querySelectorAll('[data-video]'),
  };

  const playVideo = async (videoElem, playButton) => {
    try {
      await videoElem.play();
      playButton.classList.add(playClassName);
    } catch (err) {
      playButton.classList.remove(playClassName);
    }
  };

  const checkEventPlayer = (videoElem, playButton) => {
    videoElem.addEventListener('play', () => {
      playButton.classList.add(playClassName);
    });
    videoElem.addEventListener('pause', () => {
      playButton.classList.remove(playClassName);
    });

  };

  const player = () => {
    for (const btn of videoElems.buttons) {
      const elem = btn.closest(wrapper);
      const videoItem = elem.querySelector(videoWrapper);
      btn.addEventListener('click', () => {
        if (!btn.classList.contains(playClassName)) {
          playVideo(videoItem, btn);
        }
      });
      checkEventPlayer(videoItem, btn);
    }
  };
  player();
};

export default video;
