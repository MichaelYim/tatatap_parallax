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
    if($(window).scrollTop() + $(window).height() == $(document).height()) { //if scrolled to bottom
      _.debounce($(".top-item").animate({backgroundColor:'rgba(93, 92, 94, 0.8)'}, 600),300);
      _.debounce($(".bottom-item").animate({backgroundColor:'rgba(93, 92, 94, 1)'}, 600),300);
    }
    // if scrolled near top, opacity changes back... not in specification

    if($(window).scrollTop() < 100) {
      _.debounce($(".top-item").css({backgroundColor:'rgba(93, 92, 94, 0)'}), 600);
      _.debounce($(".bottom-item").css({backgroundColor:'rgba(93, 92, 94, 0.8)'}),600);
    }
  });


});