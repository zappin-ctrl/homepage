// Saves options to chrome.storage
function save_options() {
  var language = document.getElementById('language').value;
  var custombg = document.getElementById('custombg').value;
  var customfont = document.getElementById('customfont').value;
  var customfontgoogle = document.getElementById('customfontgoogle').checked;
  var hexbg = document.getElementById('hexbg').checked;
  var engines = document.getElementById('engines').value;
  var wkey = document.getElementById('wkey').value;
  var wlang = document.getElementById('wlanguage').value;
  var tempc = document.getElementById('tempc').checked;
  var links = document.getElementById('links').value;
  var googleapps = document.getElementById('googleapps').checked;
  var showSettings = document.getElementById('show-settings').checked;
  var customcss = document.getElementById('customcss').value;

  chrome.storage.local.set({
    language: language,
    custombg: custombg,
    customfont: customfont,
    customfontgoogle: customfontgoogle,
    engines: engines,
    wkey: wkey,
    wlang: wlang,
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
    language: "",
    custombg: "",
    customfont: "",
    customfontgoogle: false,
    engines: "google",
    wkey: "",
    wlang: "en",
    tempc: true,
    hexbg: false,
    links: "",
    googleapps: false,
    showSettings: true,
    customcss: ""
  }, function(items) {
    document.getElementById('language').value = items.language;
    document.getElementById('custombg').value = items.custombg;
    document.getElementById('customfont').value = items.customfont;
    document.getElementById('customfontgoogle').checked = items.customfontgoogle;
    document.getElementById('hexbg').checked = items.hexbg;
    document.getElementById('engines').value = items.engines;
    document.getElementById('wkey').value = items.wkey;
    document.getElementById('wlanguage').value = items.wlang;
    document.getElementById('tempc').checked = items.tempc;
    document.getElementById('links').value = items.links;
    document.getElementById('googleapps').checked = items.googleapps;
    document.getElementById('show-settings').checked = items.showSettings;
    document.getElementById('quicklink-limit').innerText = Math.floor((window.innerHeight - 65) / 40).toString();
    document.getElementById('customcss').value = items.customcss;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var languages = moment.locales();
  var wlanguages = {
    "ar": "Arabic", "bg": "Bulgarian", "ca": "Catalan", "cz": "Czech",
    "de": "German", "el": "Greek", "fa": "Persian (Farsi)", "fi": "Finnish",
    "fr": "French", "gl": "Galician", "hr": "Croatian", "hu": "Hungarian",
    "it": "Italian", "ja": "Japanese", "kr": "Korean", "la": "Latvian",
    "lt": "Lithuanian", "mk": "Macedonian", "nl": "Dutch", "pl": "Polish",
    "pt": "Portuguese", "ro": "Romanian", "ru": "Russian", "se": "Swedish",
    "sk": "Slovak", "sl": "Slovenian", "es": "Spanish", "tr": "Turkish",
    "ua": "Ukrainian", "vi": "Vietnamese", "zh_cn": "Chinese Simplified",
    "zh_tw": "Chinese Traditional"
  }

  // Clock languages
  for (var i = 0; i < languages.length; i++) {
    var option = document.createElement("option");
    option.text = languages[i];
    option.value = languages[i];
    document.getElementById("language").appendChild(option);
  }

  // Weather languages
  for (var i in wlanguages) {
    console.log(i)
    var option = document.createElement("option");
    option.text = wlanguages[i];
    option.value = i;
    document.getElementById("wlanguage").appendChild(option);
  }
});

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
