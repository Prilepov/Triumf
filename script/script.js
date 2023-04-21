$(document).ready(function ($) {
    $('.akcsldr').slick({
        dots: true,
        arrows: true,
        infinitie: true,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: "<img src='images/prvarr.svg' class='prevar' alt='1'>",
        nextArrow: "<img src='images/nxtarr.svg' class='nextar' alt='1'>"
    });

    $('.drmnfctrsldr').slick({
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinitie: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: "<img src='images/prvarr.svg' class='prevar' alt='1'>",
        nextArrow: "<img src='images/nxtarr.svg' class='nextar' alt='1'>",
        responsive: [
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    $('.addrstxtsldr').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinitie: true,
        asNavFor: '.addrsmapsldr',
        prevArrow: "<img src='images/prvarr.svg' class='prevar txtsldrarr' alt='1'>",
        nextArrow: "<img src='images/nxtarr.svg' class='nextar txtsldrarr' alt='1'>"
    });

    $('.addrsmapsldr').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinitie: true,
        asNavFor: '.addrstxtsldr',
        prevArrow: "<img src='images/prvarr.svg' class='prevar txtsldrarr' alt='1'>",
        nextArrow: "<img src='images/nxtarr.svg' class='nextar txtsldrarr' alt='1'>"
    });

    $('.carddrssldr').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinitie: true,
        prevArrow: "<img src='images/prvarr.svg' class='prevar txtsldrarr' alt='1'>",
        nextArrow: "<img src='images/nxtarr.svg' class='nextar txtsldrarr' alt='1'>",
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            }
        ],
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    });

    $('#strnopndrs>div input').change(function () {
        if ($(this).attr('checked', true)) {
            $(this).next().css('border', '2px solid var(--accentclr)')
        } else if ($(this).attr('checked', false)) {
            $(this).next().css('border', '2px solid transparent');
        }
    });

    if (window.innerWidth < 800) {
        $('.cardlead').after($('.cardtxt'));
        var cardtxtdiv1 = "<div class='cardtxtdiv1'></div>";
        var cardtxtdiv2 = "<div class='cardtxtdiv2'></div>";
        $('.cardtxtfrm').prepend($(cardtxtdiv1));
        $('.cardtxtdiv1').prepend($('.cardtxtfrm > div:nth-child(2)')).append($('#strnopndrs'));
        $('.cardtxtdiv1').after($(cardtxtdiv2));
        $('.cardtxtdiv2').prepend($('.cardtxtfrm > div:nth-child(3)')).append($('#clsizns'));
    }

    if (window.innerWidth < 800) {
        var brgrmn = '<div class="brgrmn"></div>';
        var brgrbtn = '<input id="menu__toggle" class="brgrbtn" type="checkbox" /><label class="menu__btn brgrbtn" for="menu__toggle"><span></span></label>';
        var addrgbrgr = '<div class="addrgbrgr"></div>'
        $('header').append($(brgrbtn));
        $('header').append($(brgrmn));
        $('.brgrmn').append($('header>*:not(.brgrbtn, .menu__btn)'));
        $('.leadwrpr h1').clone().css('color', '#FFFFFF').appendTo('.brgrmn>a');
        $('.brgrmn .logo').attr('src', './images/logobrgr.svg');
        $('.hdrnv').after($(addrgbrgr));
        // var addrarr = $('.addrstxtsldr .addrstxtsldrslc');

        $('.addrstxtsldr .addrstxtsldrslc').each(function () {
            $(this).clone(false).appendTo('.addrgbrgr');
        })
    }

    $('header input[type="checkbox"] + label').click(function (e) {
        $('.brgrmn').toggleClass('active');
        $('header').toggleClass('headeract');
    })

});

