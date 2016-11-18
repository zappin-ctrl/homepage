function date(id) {
  date = new Date;
  d = date.getDate();
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  result = `${d}. ${months[month]} ${year}`;
  document.getElementById(id).innerHTML = result;
  setTimeout('date("'+id+'");','1000');
  return true;
}

function time(id) {
  date = new Date;
  h = date.getHours();
    if(h<10) {
      h = "0"+h;
    }
  m = date.getMinutes();
    if(m<10) {
      m = "0"+m;
    }
  s = date.getSeconds();
    if(s<10) {
      s = "0"+s;
    }
  result = `${h}:${m}:${s}`;
  document.getElementById(id).innerHTML = result;
  setTimeout('time("'+id+'");','1000');
  return true;
}
