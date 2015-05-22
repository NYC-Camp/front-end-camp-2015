(function($) {

  'use strict';

  $(document).ready(function() {

    // Smooth scroll. css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    // Adds header nav display toggle.
    $('.header--navigation-toggle').click(function() {
      $(this).toggleClass('header--navigation-toggle--active');
      $('.lettuce').toggleClass('lettuce-active');
      $('.tomato').toggleClass('tomato-active');
      $('.beef').toggleClass('beef-active');
      $('nav ul').toggleClass('nav-active');
    });

    // back to top
    (function($) {

      var offset = 250,
          duration = 860;

      $(window).scroll(function() {
          if ($(this).scrollTop() > offset) {
              $('#back-to-top').fadeIn(duration);
          } else {
              $('#back-to-top').fadeOut(duration);
          }
      });

      $('#back-to-top').click(function(event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: 0}, duration);
          return false;
      })

    })($);

  });



})(jQuery);


