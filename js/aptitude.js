$(document).ready(function(){
  // Background moves 50% of scroll
  var $window = $(window);

  $('section[data-type="background"]').each(function(){
    var $bg = $(this); // assign the object
      $(window).scroll(function() {
        var yPos = -($window.scrollTop() / $bg.data('speed'));
        // final background position
        var coords = '50% '+ yPos + 'px';
        // Move background
        $bg.css({ backgroundPosition: coords });
      });
  });

  // Opacity change when bottom bar reaches top bar
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(".top-item").fadeTo(1000, 0.8);

    }
  });


});