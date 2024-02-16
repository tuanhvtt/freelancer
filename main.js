$(document).ready(function () {
    // $(".header_menu .bar").click(function () {
    //     $(this).next().toggleClass('hidden');
    // });
    $(".copyright").click(function () {
        $(this).find('.footer_bottom').toggleClass('hidden');
    });
    $(".header_register.account_signin .bar").click(function () {
        $(this).next().toggleClass('open');
    });

    // Kiểm tra kích thước màn hình khi trang được tải và mỗi khi cửa sổ trình duyệt được resize
    $(window).resize(function() {
        // Lấy kích thước của cửa sổ trình duyệt
        var windowWidth = $(window).width();

        // Kiểm tra kích thước màn hình và thực hiện các hành động cụ thể
        if (windowWidth <= 767) {
            $('.header_menu .bar').click(function () {
                $('#mobile_menu').addClass('active')
                $('.bg-cover').addClass('active');
            })
            $('.bg-cover').click(function () {
                $('#mobile_menu').removeClass('active');
                $(this).removeClass('active');
            })
            $('.close-menu-icon').click(function () {
                $('.bg-cover').removeClass('active');;
                $('#mobile_menu').removeClass('active')
            })
        } else {
            $(".header_menu .bar").click(function () {
                $(this).next().toggleClass('hidden');
            });
        }
    });

    // Gọi hàm resize một lần khi trang được tải để kiểm tra kích thước màn hình ban đầu
    $(window).resize();
});