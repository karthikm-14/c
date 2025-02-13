$(function(){
    // hide and show section
    $('.questions-header-block h2').click((event) => {
        $('.questions-header-block h2').removeClass('active')
        let section = "#" + $(event.currentTarget).data('section');
        $(event.currentTarget).addClass('active')
        $('.question-individual-section-container .questions-list').removeClass('active')
        $(section).addClass('active')
    })
    // show answer
    $('.question-and-answer .question').click((event) => {
        $(event.currentTarget).parents('.questions-list').find('.answer').removeClass('active')
        $(event.currentTarget).parents('.questions-list').find('.question').removeClass('active')
        $(event.currentTarget).parent('.question-and-answer').find('.answer').addClass('active')
        $(event.currentTarget).parent('.question-and-answer').find('.question').addClass('active')
    })
});