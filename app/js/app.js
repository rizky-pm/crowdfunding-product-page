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
