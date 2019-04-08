const text = baffle(".data");
text.set({
  characters: "zpxzVpasdfh86136░█▒ ░░░█▓ >░░ ▓/▒█▓ █ █>█▒sayg▒ ░░░█▓ >yf",
  speed: 150
});
text.start();
text.reveal(70000);

const text1 = baffle(".quote");
text1.set({
  characters: "qwertyuiopasdfgh8613611888",
  speed: 140
});
text1.start();
text1.reveal(5500);

//FIN EFFET NOM

// DEBUT TIMELINE
(function() {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
//FIN TIMELINE

/* POUR REMONTER LA PAGE AVEC SCROLL UP*/
jQuery(function(){
$(function () {
$(window).scroll(function () { /*Fonction appelée quand on descend la page*/
if ($(this).scrollTop() > 200 ) {  /* Quand on est à 200pixels du haut de page,*/
$('#scrollUp').css('right','10px'); /* Replace à 10pixels de la droite l'image*/
} else {
$('#scrollUp').removeAttr( 'style' ); /* Enlève les attributs CSS affectés par javascript*/
}
});
});
});
/* pour faire un effet en remontant*/
$(function(){
	$("#scrollUp").click(function(){
    	$("html, body").animate({scrollTop: 0},"slow");
    });
});