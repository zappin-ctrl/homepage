!function(){"use strict";var e,t=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),n="undefined"!=typeof InstallTrigger;try{chrome.storage.local.get({no_seconds:!1},(function(t){e=t.no_seconds?"LT":"LTS"}))}catch(t){console.log("Running on browser, resulting to default values..."),e="LTS"}function o(){var t=moment().format("LL"),n=moment().format(e);document.getElementById("js-date").innerText=t,document.getElementById("js-time").innerText=n,requestAnimationFrame(o)}var a=document.getElementById("js-bg");function l(e){"none"==e.style.display?e.style.display="block":e.style.display="none"}!function(){moment.locale(navigator.language),o();var e=Math.floor(31*Math.random());a.onload=function(){a.style.opacity=1},document.addEventListener("DOMContentLoaded",(function(){a.src="assets/images/backgrounds/background"+e+".jpg"}),!1)}();for(var c=moment.locales(),r=0;r<c.length;r++){var d=document.createElement("option");d.text=c[r],d.value=c[r],document.getElementById("language").appendChild(d)}function m(e,t){var n=document.getElementById("install-button");n.style.display="block",n.innerText=e,n.href=t}document.getElementById("changebg").onclick=function(){var e=prompt("Please enter a font","Times New Roman");e&&(addFont='"'+e+'", "Lato", sans-serif, Arial',document.body.style.fontFamily=addFont)},document.getElementById("changefont").onclick=function(){var e=prompt("Please enter a background URL:","https://");e&&(a.src=e)},document.getElementById("nosearch").onclick=function(){l(document.getElementById("formsearch"))},document.getElementById("terminal").onclick=function(){var e=document.getElementById("body"),t=document.getElementById("terminal-me"),n=document.getElementById("js-bg"),o=document.getElementById("formsearch");e.classList.contains("terminal")?(e.classList.remove("terminal"),n.style.opacity="1",t.style.display="none",t.style.background=null):(e.classList.add("terminal"),n.style.opacity="0",t.style.display="block",t.innerText=`${function(){if(navigator.userAgent.includes("Edg/"))return"edge";var e=navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);return(e?e[1]:"browser").toLowerCase()}()}@homepage:~$ now --watch`,o.style.display="none")},document.getElementById("weather").onclick=function(){l(document.getElementById("wcontainer"))},document.getElementById("language").onchange=function(e){var t=document.getElementById("language").value;t||(t=navigator.language),moment.locale(t)},n?m("Add to Firefox","https://addons.mozilla.org/addon/alexflipnote-homepage/"):t&&m("Add to Chrome","https://chrome.google.com/webstore/detail/apilabeffmpplallenlcommnigaafgfb")}();
