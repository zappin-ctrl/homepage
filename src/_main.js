import { updateDateAndTime } from "./utils/timeManager.js"

export function runClock() {  
  // Start updating
  moment.locale(navigator.language);
  updateDateAndTime();

  // Set background to a random one
  var backgroundElement = document.getElementById('js-bg');
  var selected = Math.floor(Math.random() * 31);

  backgroundElement.onload = function () {
    backgroundElement.style.opacity = 1;
  }

  // Finally put the last touch on demo page
  document.addEventListener('DOMContentLoaded', function() {
    backgroundElement.src = 'assets/images/backgrounds/background' + selected + '.jpg';
  }, false);
}
