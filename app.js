'use strict';

// MDN
/**
 * The DOMcontentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
 * without waiting for stylesheets, images, and subframes to finish loading.
 */
/**
 * The load event is fired when the whole page has loaded, including all dependent resources such as 
 * stylesheets and images.
 * preloader는 단순 html만이 아니라 전체 페이지가 로드되고 나서 사라져야 하기 때문에
 * load event를 사용할 예정!
 */

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

btn.addEventListener('click', function(){
  if (!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
    // The HTMLMediaElement.pause() method will pause playback of the media, if the media is already in a paused state this method will have no effect.
  }
  else {
    btn.classList.remove('slide');
    video.play();
    // The HTMLMediaElement play() method attempts to begin playback of the media. 
    // It returns a Promise which is resolved when playback has been successfully started. 
    // Failure to begin playback for any reason, such as permission issues, result in the promise being rejected.
  }
  // toggle을 사용하지 않았던 이유는 video에 pause(), play() 메소드를 사용하려고 했기 때문!
});

// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', function(){
  preloader.classList.add('hide-preloader');
});