// Check browser type
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = typeof InstallTrigger !== 'undefined';

document.addEventListener('DOMContentLoaded', function() {
  function enableButton() {
    addbutton = document.getElementById('install-button');
    addbutton.style.display = "block";
  }

  if (isFirefox) {
    enableButton()
    addbutton.innerText = "Add to Firefox";
    addbutton.removeAttribute("onclick");
    addbutton.target = "_blank";
    addbutton.href = "https://addons.mozilla.org/addon/alexflipnote-homepage/";
  } else if (isChrome) {
    enableButton()
    addbutton.innerText = "Add to Chrome";
  }

}, false);
