$(window).ready(function() {
  $('#tip').html($(window).width() + " x " + $(window).height());
});
$(window).resize(function() {
  $('#tip').html($(window).width() + " x " + $(window).height());
});


// Jquery mostrar resolucion

 $(document).ready(function(){
var header = $('html');

var backgrounds = new Array(
    'url(/img/background.jpg)'
  , 'url(/img/background1.jpg)'
  , 'url(/img/background2.jpg)'
  , 'url(/img/background3.jpg)'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 7000);

header.css('background-image', backgrounds[0]);
});
