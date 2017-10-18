$(function(){
    const mq = window.matchMedia( "(min-width: 768px)" );

    $('#information').addClass('hide');
    $('#portExamples').addClass('hide');
    $('#brand').addClass('hide');
    $('#homePage').removeClass('hide');

    // $('.navbar-toggle').click(function() {
    //     $('#myNavbar').removeClass('hide');
    // })

    $('#home').click(function(){
        $('#information').addClass('hide');
        $('#portExamples').addClass('hide');
        $('#brand').addClass('hide');
        $('#homePage').removeClass('hide');
        $('#myNavbar').collapse('hide');
        $('.parallax-main').css('min-height', '900px');
    });

    $('#about').click(function(){
        $('#information').removeClass('hide');
        $('#portExamples').addClass('hide');
        $('#brand').removeClass('hide');
        $('#homePage').addClass('hide');
        $('#myNavbar').collapse('hide');
        if(mq.matches) {
            $('.parallax-main').css('height', '900px');
        } else {
            $('.parallax-main').css('height', '1360px');
        }
    });
    
    $('#portfolio').click(function(){
        $('#information').addClass('hide');
        $('#portExamples').removeClass('hide');
        $('#brand').removeClass('hide');
        $('#homePage').addClass('hide');
        $('#myNavbar').collapse('hide');
        if(mq.matches) {
            $('.parallax-main').css('height', '900px');
        } else {
            $('.parallax-main').css('height', '1360px');
        }
    });
});