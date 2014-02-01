(function(){

  'use strict';

  $(document).ready(initialize);
  var timer;

  function initialize(){
    $('#add-color').click(getColors);
    $('#add-random').click(addRandom);
    $('#start').click(start);
    $('#stop').click(stop);
  }

  function start(){
    timer = setInterval(addRandom, 1000);
  }

  function stop(){
    clearInterval(timer);
  }

  function addRandom(){
    var red =  Math.floor(Math.random()*256);
    var green =  Math.floor(Math.random()*256);
    var blue =  Math.floor(Math.random()*256);
    var alp =  Math.random();
    var rgba = 'rgba('+red+','+green+','+blue+','+alp+')';
    var $div = $('<div>');
    $div.addClass('box');
    $div.css('background-color', rgba);
    $('#colors').prepend($div);
  }

  function getColors(){
    var colors= $('#color').val();
    colors = colors.split(', ');
    for(var i=0; i< colors.length; i++){
      var $div = $('<div>');
      $div.addClass('box');
      $div.text(colors[i]);
      if (i % 2 === 0) {
        $div.css({'background-color': colors[i], 'border': '1px solid black'});
      }else{
        $div.css({'background-color': colors[i], 'border': '1px solid red'});
      }
      $('#colors').prepend($div);
    }
  }

})();

