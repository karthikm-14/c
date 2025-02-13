$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: true,
        infinite: false,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false
    });

    // Slider text animation
    let words = ["Compete.", "Repeat.", "Win."];
    let index = 0;

    setInterval(function(){
        index = (index + 1) % words.length;
        $(".top-slider .change-text").fadeOut(1000, function() {
            $(this).text(words[index]).fadeIn(1000);
        });
    }, 2000);
});
      