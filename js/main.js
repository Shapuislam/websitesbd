// var swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

/*--
    Boostrap Menu 
    -----------------------------------*/
// Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown(400);
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp(300);
            $(this).toggleClass('open');       
        }
    );
});



 /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticker');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 20) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
 



// sliderjs
 var carouselContainer = $('.carousel');
   var slideInterval = 5000;

function toggleH(){
    $('.toggleHeading').hide()
    var caption = carouselContainer.find('.active').find('.toggleHeading').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function (){
        $(this).removeClass('animated fadeInRight')});
caption.slideToggle();
}

function toggleC(){
    $('.toggleCaption').hide()
    var caption = carouselContainer.find('.active').find('.toggleCaption').addClass('animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function (){
        $(this).removeClass('animated fadeInUp')
});
caption.slideToggle();
}
  carouselContainer.carousel({
  interval: slideInterval, cycle: true, pause: "hover"})
 .on('slide.bs.carousel slid.bs.carousel', toggleH).trigger('slide.bs.carousel')
 .on('slide.bs.carousel slid.bs.carousel', toggleC).trigger('slide.bs.carousel');


// tesmorial
// vars
'use strict'
var testim = document.getElementById("testim"),
        testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
        
        testim.addEventListener("touchstart", function(e) {
                touchStartPos = e.changedTouches[0].clientX;
        })
    
        testim.addEventListener("touchend", function(e) {
                touchEndPos = e.changedTouches[0].clientX;
            
                touchPosDiff = touchStartPos - touchEndPos;
            
                console.log(touchPosDiff);
                console.log(touchStartPos); 
                console.log(touchEndPos);   

            
                if (touchPosDiff > 0 + ignoreTouch) {
                        testimLeftArrow.click();
                } else if (touchPosDiff < 0 - ignoreTouch) {
                        testimRightArrow.click();
                } else {
                    return;
                }
            
        })
}

//faq

(function($) {
    'use strict';
    
    jQuery(document).on('ready', function(){
    
            $('a.page-scroll').on('click', function(e){
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 50
                }, 1500);
                e.preventDefault();
            });     

    });     

                
})(jQuery);

//tab software  
