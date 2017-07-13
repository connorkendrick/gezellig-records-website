---
---
$(document).ready(function() {
    // Variable to hold device screen width
    var width;
    // Variable to represent when the site is in mobile mode
    var is_mobile;

    // Function to show or hide mobile nav bar depending on is_mobile
    var displayNav = function() {
        // Get current window width
        width = $(window).width();
        // Use header logo class's display attribute to determine if in mobile mode
        is_mobile = $(".logo").css("display") == "none";
        if (is_mobile) {
          $(".nav").hide(0);
        }
        else {
          $(".nav").show(0);
        }
      }

    // Set initial state
    displayNav();

    // Subscribe to resize event
    $(window).on("resize", function(evt) {
        // Do not reset nav bar if scrolling (scrolling on mobile calls resize event)
        if (width == $(window).width()) {
            return;
        }
        // Set nav menu button to default image (horizontal lines)
        $(".nav-button").attr("src", "{{ site.baseurl }}/assets/img/nav-button-open.svg");
        // Reset nav bar
        displayNav();
    });

    // Custom pointer when hovering over nav bar menu button
    $(".nav-button").css("cursor", "pointer");

    // Toggle nav bar visibility with menu button
    $(document).ready(function(){
        $(".nav-button").click(function(){
            // Opens the hidden navigation menu div
            $(".nav").slideToggle("slow");
            // If menu button image is horizontal lines
            if ($(".nav-button").attr("src") == "{{ site.baseurl }}/assets/img/nav-button-open.svg") {
                // Set menu button image to an X
                $(".nav-button").attr("src", "{{ site.baseurl }}/assets/img/nav-button-close.svg");
            }
            else {
                // Set menu button image to horizontal lines
                $(".nav-button").attr("src", "{{ site.baseurl }}/assets/img/nav-button-open.svg");
            }
        });
    });
});
