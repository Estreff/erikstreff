$(function(){
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
    });

    $('#about').click(function(){
        $('#information').removeClass('hide');
        $('#portExamples').addClass('hide');
        $('#brand').removeClass('hide');
        $('#homePage').addClass('hide');
        $('#myNavbar').collapse('hide');
    });
    
    $('#portfolio').click(function(){
        $('#information').addClass('hide');
        $('#portExamples').removeClass('hide');
        $('#brand').removeClass('hide');
        $('#homePage').addClass('hide');
        $('#myNavbar').collapse('hide');
    });
});