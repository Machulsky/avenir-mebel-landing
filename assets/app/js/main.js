var $slideCarousel = $('#carouselExampleIndicators');

// Initialize carousel
$slideCarousel.carousel();

function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $slideCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');

// Apply the animation using the doAnimations()function
doAnimations($firstAnimatingElems);

// Attach the doAnimations() function to the
// carousel's slide.bs.carousel event
$slideCarousel.on('slide.bs.carousel', function (e) {
  // Select the elements to be animated inside the active slide
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});




jQuery(window).scroll(function() {
        
        var offset = window.pageYOffset;
        if(offset > 50){
            $(".navbar").addClass('fixed-top');
        }

        if(offset<=50){
            $(".navbar").removeClass('fixed-top');
        }

           
});

$(document).ready(function(){

    var offset = window.pageYOffset;
    if(offset > 50){
            $(".navbar").addClass('fixed-top');
        }

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('300');
            $('.filter').filter('.'+value).show('300');
            
        }

        $('.filter-button').removeClass('filter-active');
    $(this).addClass('filter-active');
    });

    
  
});

$(function() {
    $('.js-scroll-trigger').bind('click', function(event) {
        var $anchor = $(this);
     
        if( $("#mainNav").hasClass('fixed-top')){

          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

          
        }else{
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-86
        }, 1500, 'easeInOutExpo');

        }

                event.preventDefault();
    });
});
  $(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop()+100;
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop   = $(this).offset().top;
      var elemBottom  = elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id    = $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
}); 

(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);
$("#mainNav .nav-item").click(function(event){
            $("#navbarNavDropdown").collapse('hide');
          });

$("#Photogallery div").shuffle();
const gallery = new Viewer(document.getElementById('Photogallery'), {toolbar:false, zoomable:false, movable:false});
var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });
  function ajaxSubmit(){

    var data = $("#call-form").serialize();

    $.ajax({
                method: "POST",
                url: "handler.php",
                data: data
})
  .done(function( html ) {
   $( "#results-modal" ).html( html );
  });

  }
$("#call-form").submit(function(){
  ajaxSubmit();
});


var btn = $('#top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});



btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
$( window ).on( "load", function() {
  $('.preloader').fadeOut('slow');
  $('body').css("overflow","auto");
});

$('#CallWindow').on('show.bs.modal', function (e) {
  $('body').css("overflow","hidden");
});

$('#CallWindow').on('hide.bs.modal', function (e) {
  $('body').css("overflow","auto");
});









