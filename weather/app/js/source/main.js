(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#get-cams').click(getCams);
  }

  function showCams(url){
    url.webcams.forEach(function(cam){
      var img = 'url('+cam.WIDGETCURRENTIMAGEURL+')';
      var $div = $('<div>');
      $div.addClass('cam');
      $div.css('background-image', img);
      $('#cams').append($div);
    });
  }

  function getCams(){
    var zip = $('#zipcode').val();
    var url = 'http://api.wunderground.com/api/b9a0220c410de9da/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url, showCams);
  }

})();

