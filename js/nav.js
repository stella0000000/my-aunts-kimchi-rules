var prevScrollY = window.pageYOffset;
window.onscroll = function() {
  var currentScrollY = window.pageYOffset;
  if (prevScrollY > currentScrollY) {
    document.getElementById("kimchiMenu").style.top = "10px";
  } else {
    document.getElementById("kimchiMenu").style.top = "-50px";
  }

  if (!!document.getElementById("recipeMenu")) {
    if (prevScrollY > currentScrollY) {
      document.getElementById("recipeMenu").style.top = "10px";
    } else {
      document.getElementById("recipeMenu").style.top = "-50px";
    }
  }

  prevScrollY = currentScrollY;
}