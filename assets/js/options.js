// Saves options to chrome.storage
function save_options() {
  var custombg = document.getElementById('custombg').value;
  var engines = document.getElementById('engines').value;

  chrome.storage.sync.set({
    custombg: custombg,
    engines: engines
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
  chrome.storage.sync.get({
    custombg: "",
    engines: "google"
  }, function(items) {
    document.getElementById('custombg').value = items.custombg;
    document.getElementById('engines').value = items.engines;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
