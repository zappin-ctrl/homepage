function randomBackground() {
    /*
      Change the number before 1 with the amount of backgrounds you have
      Files must be .jpg and names background[NUMBER].jpg
    */
    var randomNumber = Math.floor(Math.random() * 8) + 1;
    var htmlElement = document.getElementById("main");
    var style = htmlElement.style;
    style.backgroundColor = "transparent";
    style.backgroundImage = "url(\"images/background"+randomNumber+".jpg\")";
    style.backgroundRepeat = "no-repeat";
    style.backgroundAttachment = "scroll";
    style.backgroundSize = "0% 0% / cover";
}
