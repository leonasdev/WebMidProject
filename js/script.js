$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 10) {
        $('.bottomMenu').fadeIn();
    } else {
        $('.bottomMenu').fadeOut();
    }

});

$(document).ready(function () {

    $('.hello').click(function () {

        $(this).css('color', 'red');

    });

});