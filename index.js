/**
 * Unobtrusive HTML5 Video Loop Shim
 *
 * If the `loop` boolean attribute is specified, seek to the
 * start when the player reaches the end of the video.
 *
 * @event
 */

window.addEventListener('ended', function (e) {
  var element, isVideo;

  element = e.target;
  isVideo = 'VIDEO' == element.nodeName.toUpperCase();

  // bail out unless we are using the video tag

  if (!isVideo) { return; }

  // play video if `loop` attribute is set

  if (element.hasAttribute('loop')) { element.play(); }
}, true);
