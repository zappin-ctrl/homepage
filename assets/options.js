// Saves options to chrome.storage
function save_options() {
  var custombg = document.getElementById('custombg').value;
  var customfont = document.getElementById('customfont').value;
  var customfontgoogle = document.getElementById('customfontgoogle').checked;
  var hexbg = document.getElementById('hexbg').checked;
  var engines = document.getElementById('engines').value;
  var wkey = document.getElementById('wkey').value;
  var tempc = document.getElementById('tempc').checked;
  var links = document.getElementById('links').value;
  var googleapps = document.getElementById('googleapps').checked;
  var showSettings = document.getElementById('show-settings').checked;
  var customcss = document.getElementById('customcss').value;

  chrome.storage.local.set({
    custombg: custombg,
    customfont: customfont,
    customfontgoogle: customfontgoogle,
    engines: engines,
    wkey: wkey,
    hexbg: hexbg,
    tempc: tempc,
    googleapps: googleapps,
    links: links,
    showSettings: showSettings,
    customcss: customcss
  }, function() {
    // Update status to let user know options were saved.
    var modal = document.getElementById('modal');
    var modaltarget = document.getElementsByClassName('modal')[0];
    modal.style.display = "block";
    modaltarget.classList.remove('modal--close');
    setTimeout(function() {
      modaltarget.classList.add('modal--close');
      setTimeout(function() { modal.style.display = "none"; }, 570);
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    custombg: "",
    customfont: "",
    customfontgoogle: false,
    engines: "google",
    wkey: "",
    tempc: true,
    hexbg: false,
    links: "",
    googleapps: false,
    showSettings: true,
    customcss: ""
  }, function(items) {
    document.getElementById('custombg').value = items.custombg;
    document.getElementById('customfont').value = items.customfont;
    document.getElementById('customfontgoogle').checked = items.customfontgoogle;
    document.getElementById('hexbg').checked = items.hexbg;
    document.getElementById('engines').value = items.engines;
    document.getElementById('wkey').value = items.wkey;
    document.getElementById('tempc').checked = items.tempc;
    document.getElementById('links').value = items.links;
    document.getElementById('googleapps').checked = items.googleapps;
    document.getElementById('show-settings').checked = items.showSettings;
    document.getElementById('quicklink-limit').innerText = Math.floor((window.innerHeight - 65) / 40).toString();
    document.getElementById('customcss').value = items.customcss;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
