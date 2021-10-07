$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('..hoverpopup').show();
    });
    $('.hoverpopup').click(function(){
        $('.hoverpopup').hide();
    });
    $('.popupclose').click(function(){
        $('..hoverpopup').hide();
    });
});

