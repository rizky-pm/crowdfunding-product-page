let showNavMenuMobile = false;

const toggleNavMenuMobile = (e) => {
    $('.overlay').fadeToggle();
    $('.menu').slideToggle();

    if (!showNavMenuMobile) {
        $('.icon-toggle').attr('src', './images/icon-close-menu.svg');
        showNavMenuMobile = !showNavMenuMobile;
    } else {
        $('.icon-toggle').attr('src', './images/icon-hamburger.svg');
        showNavMenuMobile = !showNavMenuMobile;
    }
};

$('.icon-toggle').click(function (e) {
    e.preventDefault();
    toggleNavMenuMobile(e);
});

const overlay = $('.overlay');

overlay.click((e) => {
    console.log('overlay clicked');
    toggleNavMenuMobile(e);
});

const checkboxBookmark = $("input[type='checkbox']");
const iconBookmark = $('.icon-bookmark');

checkboxBookmark.change(function (e) {
    e.preventDefault();

    let mediaQuery = 'screen and (min-width: 992px)';

    let isDesktopView = window.matchMedia(mediaQuery).matches;

    if ($(this).is(':checked')) {
        iconBookmark.find('circle').attr('fill', 'hsl(176, 72%, 28%)');
        iconBookmark.find('path').attr('fill', '#fff');
        $('.bookmark').text('Bookmarked');
        $('.bookmark').css('color', 'hsl(176, 72%, 28%)');

        if (isDesktopView) {
            $('.checkbox-wrapper').css('width', '195px');
        }
    } else {
        iconBookmark.find('circle').attr('fill', '#2F2F2F');
        iconBookmark.find('path').attr('fill', '#B1B1B1');
        $('.bookmark').text('Bookmark');
        $('.bookmark').css('color', 'hsl(0, 0%, 48%)');

        if (isDesktopView) {
            $('.checkbox-wrapper').css('width', '175px');
        }
    }
});
