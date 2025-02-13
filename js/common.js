$(function(){
    // Add footer 
    $("#footer").load("../../footer.html");

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
});