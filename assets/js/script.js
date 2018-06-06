// Check browser type
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isFirefox = typeof InstallTrigger !== 'undefined';


// Engine list
searchengine = {
  "none": {"url": "none", "holder": "none"},
  "ddg": {"url": "https://duckduckgo.com", "holder": "Search on DuckDuckGo..."},
  "bing": {"url": "https://www.bing.com/search", "holder": "Search on Bing..."}
}


// Update the displayed date and time on the page.
function updateDateAndTime() {
  var dateString = moment().format('LL'),
  timeString = moment().format('LTS');

  document.getElementById('js-date').innerText = dateString;
  document.getElementById('js-time').innerText = timeString;

  // Request animation frame for next update
  requestAnimationFrame(updateDateAndTime);
}


// Start updating
moment.locale(navigator.language);
updateDateAndTime();


// Get viewport dimensions.
function getViewportDimensions () {
  return {
    w: typeof window.innerWidth === 'number' ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth,
    h: typeof window.innerHeight === 'number' ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight
  };
}


// Update the background image height and width properties based on the ratio of the viewport and the ratio of the image.
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
var selected = Math.floor(Math.random() * 31);

backgroundElement.onload = function () {
  var d = getViewportDimensions();
  if ((d.w / d.h) < (backgroundElement.width / backgroundElement.height)) {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = '100%';
  } else {
    backgroundElement.style.width = '100%';
    backgroundElement.style.height = '100%';
  }
  backgroundElement.style.opacity = 1;
}

backgroundElement.src = 'assets/images/backgrounds/background' + selected + '.jpg';

// Attach listener to update background width and height based on viewport size changes
if (window.addEventListener) window.addEventListener('resize', handleViewportResize, false);
else if (window.attachEvent) window.attachEvent('onresize', handleViewportResize);
else window.onresize = handleViewportResize;


// Add the install button if on chrome/firefox and website
// Also if
window.onload = function() {
  var website = window.location.href.includes("alexflipnote.xyz/homepage");
  function enableButton() {
    addbutton = document.getElementById('install-button');
    addbutton.style.display = "block";
  }

  if (website && isFirefox == true) {
    enableButton()
    addbutton.innerHTML = "Add to Firefox";
    addbutton.removeAttribute("onclick");
    addbutton.target = "_blank";
    addbutton.href = "https://addons.mozilla.org/addon/alexflipnote-homepage/";
  } else if (website && isChrome == true) {
    enableButton()
    addbutton.innerHTML = "Add to Chrome";
  } else if (!website && isChrome == true) {
    // Chrome extension
    chrome.storage.sync.get({
      custombg: "",
      engines: "google"
    }, function(items) {
      if (items.custombg.length > 2) {
        backgroundElement.src = items.custombg
      } else {
        backgroundElement.src = 'assets/images/backgrounds/background' + selected + '.jpg';
      }

      if (items.engines !== "google") {
        if (items.engines == "none") {
          document.getElementById('formsearch').style.display = "none";
        }
        document.getElementById('formsearch').action = searchengine[items.engines].url;
        document.getElementById('forminput').placeholder = searchengine[items.engines].holder;
      }
    })
  }

}
