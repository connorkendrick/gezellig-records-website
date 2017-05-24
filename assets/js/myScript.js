$(document).ready(function(){

      //function to show if window > 768 and hide if less
      var displayNav = function(){
        var width= $(window).width();
        if(width<=768){
          $(".nav").hide(0);
        }else{
          $(".nav").show(0);
        };
      }

      //Set initial state
      displayNav();

      //subscribe to resize event
      $(window).on('resize',function(evt){
        $(".nav-button").attr('src',"assets/img/nav-button-open.svg");
        //set navigation state on every resize new
        displayNav();
      });

      $('.nav-button').css('cursor', 'pointer');

      //toggle nav bar visibility with button
      $(document).ready(function(){
          $(".nav-button").click(function(){
              $(".nav").slideToggle("slow");
              if ($(".nav-button").attr("src") == "assets/img/nav-button-open.svg")
                $(".nav-button").attr('src',"assets/img/nav-button-close.svg");
              else
                $(".nav-button").attr('src',"assets/img/nav-button-open.svg");
              $("html").scroll(function(e){ e.preventDefault()});
          });
      });
    });
