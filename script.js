(function ($) {
  "use strict";

  //Parallax

  function scrollBanner() {
    $(document).on("scroll", function () {
      var scrollPos = $(this).scrollTop();
      $(".parallax-fade-top").css({
        top: scrollPos / 2 + "px",
        opacity: 1 - scrollPos / 700
      });
      $(".parallax-00").css({
        top: scrollPos / -3.5 + "px"
      });
      $(".parallax-01").css({
        top: scrollPos / -2.8 + "px"
      });
      $(".parallax-top-shadow").css({
        top: scrollPos / -2 + "px"
      });
    });
  }
  scrollBanner();

  

  //Scroll back to top

   $(document).ready(function () {
     var offset = 300;
     var duration = 400;
     jQuery(window).on("scroll", function () {
       if (jQuery(this).scrollTop() > offset) {
         jQuery(".scroll-to-top").addClass("active-arrow");
       } else {
         jQuery(".scroll-to-top").removeClass("active-arrow");
       }
     });
     jQuery(".scroll-to-top").on("click", function (event) {
       event.preventDefault();
       jQuery("html, body").animate({ scrollTop: 0 }, duration);
       return false;
     });
   });
 })(jQuery);

var $animation_elements = $(".product-row > div");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			// $element.removeClass('in-view');
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

$(".notify").click(function () {
  $(this).fadeOut();
});

// for commands
/*
$(".card").on("touchstart", function () {
  var $this = $(this);
  if ($this.scrollTop() === 0) {
    $this.scrollTop(1);
  } else if (
    $this.scrollTop() ===
    $this[0].scrollHeight - $this.outerHeight()
  ) {
    $this.scrollTop($this.scrollTop() - 1);
  }
});
$("body").on("touchmove", function (e) {
  var target = e.originalEvent.srcElement || e.originalEvent.originalTarget,
    card = $(target).closest(".card");
  if (!card.length || card[0].scrollHeight <= $(card).outerHeight()) {
    e.preventDefault();
  }
});

$(window).on("orientationchange", function () {
  $("body").scrollTop(0);
});

$(window).scroll(function () {
  $(".top123").css("opacity", 1 - $(window).scrollTop() / 250);
}); */

