$(function(){
    // active page
    $('.nav-item .mav-link').removeClass('active')
    setTimeout(() => {
        if(document.activePage == 'season') {
            $('.nav-item .season').addClass('active')
        }
        if(document.activePage == 'epic') {
            $('.nav-item .epic').addClass('active')
        }
        if(document.activePage == 'champions') {
            $('.nav-item .champions').addClass('active')
        }
        if(document.activePage == 'league') {
            $('.nav-item .league').addClass('active')
        }
        if(document.activePage == 'forge') {
            $('.nav-item .forge').addClass('active')
        }
        if(document.activePage == 'faqs') {
            $('.nav-item .faqs').addClass('active')
        }
    }, 100);

    window.addEventListener('scroll', function() {
        let navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    });
});