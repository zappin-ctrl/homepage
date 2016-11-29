/**
 * Update the displayed date and time on the page.
 */
var coverMode = 0;
var timeElems = {};
function updateDateAndTime () {
  var dateString = moment().format('LL'),
      timeString = moment().format('LTS');

  // Do fades between the frames
  if(document.getElementById(`js-time-${coverMode}`).innerText != timeString && coverMode == 0){
    document.getElementById(`cover-${coverMode}`).style['z-index'] = 2;
    $(`#cover-${coverMode}`).fadeOut();
    coverMode = 1;
    document.getElementById(`cover-${coverMode}`).style['z-index'] = 1;
    $(`#cover-${coverMode}`).fadeIn(100);
  }else if(document.getElementById(`js-time-${coverMode}`).innerText != timeString && coverMode == 1){
    document.getElementById(`cover-${coverMode}`).style['z-index'] = 2;
    $(`#cover-${coverMode}`).fadeOut();
    coverMode = 0;
    document.getElementById(`cover-${coverMode}`).style['z-index'] = 1;
    $(`#cover-${coverMode}`).fadeIn(100);
  }

  document.getElementById(`js-date-${coverMode}`).innerText = dateString;
  document.getElementById(`js-time-${coverMode}`).innerText = timeString;

  // Request animation frame for next update
  requestAnimationFrame(updateDateAndTime);
}

var dateString = moment().format('LL'),
    timeString = moment().format('LTS');

document.getElementById(`js-date-0`).innerText = dateString;
document.getElementById(`js-time-0`).innerText = timeString;
document.getElementById(`js-date-1`).innerText = dateString;
document.getElementById(`js-time-1`).innerText = timeString;

// Start updating
moment.locale(navigator.language);
updateDateAndTime();

/**
 * Get viewport dimensions.
 * @return {Object} Object with w and h properties (containing width and height
 * of the viewport respectively).
 */
function getViewportDimensions () {
  return {
    w: typeof window.innerWidth === 'number' ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth,
    h: typeof window.innerHeight === 'number' ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
  };
}

/**
 * Update the background image height and width properties based on the ratio of
 * the viewport and the ratio of the image.
 */
function handleViewportResize () {
  var d = getViewportDimensions();
  if ((d.w / d.h) < (backgroundElement.width / backgroundElement.height)) {
    backgroundElement.style.width = 'auto';
    backgroundElement.style.height = '100%';
  } else {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = 'auto';
  }
}

// Set background to a random one
var backgroundElement = document.getElementById('js-bg');
var selected = Math.floor(Math.random() * 8);
backgroundElement.onload = function () {
  var d = getViewportDimensions();
  if ((d.w / d.h) < (backgroundElement.width / backgroundElement.height)) {
    backgroundElement.style.width = 'auto';
    backgroundElement.style.height = '100%';
  } else {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = 'auto';
  }
  backgroundElement.style.opacity = 1;
}
backgroundElement.src = 'assets/backgrounds/background' + selected + '.jpg';

// Attach listener to update background width and height based on viewport size
// changes
if (window.addEventListener) window.addEventListener('resize', handleViewportResize, false);
else if (window.attachEvent) window.attachEvent('onresize', handleViewportResize);
else window.onresize = handleViewportResize;
