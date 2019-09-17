export var http = function (url, callback) {
  if (!window.XMLHttpRequest) return console.log("This browser does not support requests");
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.setRequestHeader('Access-Control-Allow-Headers', '*');
  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      var json = JSON.parse(this.response);
      if (callback && typeof(callback) === 'function') {
        callback(json);
      }
    }
  };
  request.send(null);
}
