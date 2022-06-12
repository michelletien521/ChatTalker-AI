$(document).ready(function(){

    $('.GotoTop-1').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1105);
    });

    $('.GotoTop-2').click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: 0}, 725);
    });

    // 第二頁—常見問題

    $('.QA-Title').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('turquoise');  //自己變藍綠色
        $(this).parent().parent().siblings().find('.QA-Title').removeClass('turquoise');  //別人變原色

        $(this).toggleClass('QA-Plus').toggleClass('QA-Minus');
        // 自己變『+』
        $(this).parent().parent().siblings().find('.QA-Title').removeClass('QA-Minus').addClass('QA-Plus'); // 別人變『-』

        $(this).parent().siblings('.QA-Answer').slideToggle();  // 自己展開
        $(this).parent().parent().siblings().find('.QA-Answer').slideUp();  // 別人收起來
    });
});
