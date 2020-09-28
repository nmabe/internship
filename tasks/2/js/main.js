$(window).on('scroll', function() {
    if ($(window).scrollTop()){
        $('#navbar').addClass('black');
    }else {
        $('#navbar').removeClass('black');
    }
});


var slideIndex = 1;

showSlide(slideIndex);

function nextSlider(n){
    showSlide(slideIndex += n);
}

function currentSlide(n){
    console.log(n);
    showSlide(slideIndex = n);
}



function showSlide(n){
    var i;
    var slide = document.getElementsByClassName('slides');
    var dot = document.getElementsByClassName('demo');
    if (n > slide.length){
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }

    for (i = 0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace(" active", "");
    }

    slide[slideIndex - 1].style.display = 'block';
    dot[slideIndex - 1].className += " active";
}


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function(){
            $('#autoWidth').removeClass('cs-hidden');
        },
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
});