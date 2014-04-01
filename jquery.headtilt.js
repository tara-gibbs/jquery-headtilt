(function( $ ){

  $.fn.headtilt = function( options ) {

    var settings = $.extend( {
      'repeat'     : true,    // ABT: Always Be Tilting
      'duration'   : 7200     // in seconds
    }, options);

    return this.each(function() {
        var $this = $(this);

        if (settings.repeat === true) {
          $this.addClass('ht-tilt-infinite');
        }

        $this.css('-moz-animation-duration', settings.duration + 's')
            .css('-webkit-animation-duration', settings.duration + 's')
            .css('animation-duration', settings.duration + 's')
            .addClass('ht-tilt');
    });

  };
})( jQuery );