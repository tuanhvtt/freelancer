$(document).ready(function () {
    $(".header_menu .bar").click(function () {
        $(this).next().toggleClass('hidden');
    });
    $(".copyright").click(function () {
        $(this).find('.footer_bottom').toggleClass('hidden');
    });
});