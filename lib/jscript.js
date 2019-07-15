$(function(){
    $('i').css('color','black');

    $('.btnmoveRight').click(function(){

        $('.container').animate({
            left:500,
            height:'300px',
            width:'300px',
            opacity: '0.2'
        }).text("Hello World").css({color:'red', fontSize:'18pt', padding:'20pt', textAlign:'center', fontWeight:'bold'});
    });
    $('.btnmoveLeft').click(function () {

        $('.container').animate({
            left: 0,
            height: '0px',
            width: '0px',
            opacity: '1'
         }).text('');
    });

    $('.btnmoveRound').click(function () {
       var $box = $('.container');

        $box.animate({ left: 300 });
        $box.animate({top:300});
        $box.animate({left:0, top:300});
        $box.animate({left:0, top:0});
    });

    $('.btnSlideUp').click(function(){
        $('.box2').slideUp('15000');
        $('.btnSlideUp').text('Up');
    });
    $('.btnSlideDown').click(function () {
        $('.box2').slideDown('15000');
        $('.btnSlideDown').text('Down');
    });

    $('.btnSlideToggle').click(function () {
        $('.box2').slideToggle('slow');
        $('.btnSlideToggle').text('Toggled');
    });

    $('.btnSlideStop').click(function () {
        $('.box2').stop();
        $('.btnSlideStop').text('stopped');
    });

    $('.btnAppend').click(function(){

        $('ul').append('<li id="st">Strawberry</li>');
        $('#st').css('color','red');

    })
    $('.btnPrepend').click(function(){
        $('ul').prepend('<li id="bl">Blueberry</li>');
        $('#bl').css('color', 'blue');
    });
    $('.btnBefore').click(function(){
        $('ul').before('<h3 class="green"> "Pineapple" inserted before the list</h3>');
        $('.green').css('color', 'green');
    });
    $('.btnAfter').click(function(){
        $('ul').after('<h3 class="green">"Watermelon" added after the list</h3>');
        $('.green').css('color', 'green');
    })
    $('.btnAppendTo').click(function(){
        $('<label id="yummy">Yummy Fruits </label>').appendTo('label');
        $('#yummy').css('color','green');
    });

    $('.btnEmpty').click(function(){
        $('ul').empty();
        confirm("Do you want to clear the lists?");
    })
    $('.btnDetach').click(function(){
        $('ul').detach();
        confirm('Do you want to detach the list from the DOM?')
    })




});