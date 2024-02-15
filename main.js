$(document).ready(function () {
    $(".header_menu .bar").click(function () {
        $(this).next().toggleClass('hidden');
    });
    $(".copyright").click(function () {
        $(this).prev().toggleClass('hidden');
    });
});