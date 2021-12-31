// Radio Button Functionality-------------------------------------

let inputPledgeFields = $('.modal__selection__form');
inputPledgeFields.hide();

let errorMessage = $('.error-message');
errorMessage.hide();

let selectedRadio;

let modalSelections = $('.modal__selection');

modalSelections.click(function (e) {
    // e.preventDefault();
    // console.log($(this));
});

let header = document.getElementById('header');
console.log(header);

$("input[type='radio']").change(function () {
    // Change Border Color----------------------------------------
    let selectedRadioParent = $('.back-project:checked')
        .parent()
        .parent()
        .parent();
    let radioParent = $('.back-project').parent().parent().parent();
    radioParent.css('border', '2px solid transparent');
    selectedRadioParent.css('border', '2px solid hsl(176, 50%, 47%)');
    // Change Border Color----------------------------------------
    // Showing Pledge Form----------------------------------------
    if (selectedRadio !== undefined) {
        selectedRadio.slideToggle();
    }
    $(this).parent().parent().siblings('.modal__selection__form').slideToggle();
    selectedRadio = $(this)
        .parent()
        .parent()
        .siblings('.modal__selection__form');
    // Showing Pledge Form----------------------------------------
});

// Radio Button Functionality-------------------------------------

// ---------------------------------------------------------------
const modalOverlay = $('.modal-overlay');
const inputBambooStand = $('.input-bamboo-stand');
const inputBlackStand = $('.input-black-stand');
const modalSuccess = $('.modal-success');
$('.modal').hide();

modalSuccess.hide();

$('.btn-back-this-project').click(function (e) {
    e.preventDefault();
    $('.modal-overlay').fadeToggle();
    $('.modal').slideToggle();
    $('.modal').css('top', '15%');
});

// Start of Validate input pledge --------------------------------
$('.form__button').click(function (e) {
    e.preventDefault();

    const inputPledge = $(this)
        .siblings('.form__input-container')
        .children('#input-pledge');

    if (inputPledge.val() >= 25) {
        console.log('Duitnya cukup');

        if ($(this).siblings('.error-message').css('display') != 'none') {
            $(this).siblings('.error-message').slideToggle();
        }

        $('.modal').hide();

        $('.modal-success').fadeToggle();

        return true;
    } else if (inputPledge.val() == '') {
        console.log('Mana duitnya');

        $(this).siblings('.error-message').html("Pledge can't be empty");

        if ($(this).siblings('.error-message').css('display') == 'none') {
            $(this).siblings('.error-message').slideToggle();
        }

        return false;
    } else if (inputPledge.val() < 25) {
        console.log('Duitnya kurang bre');

        if (inputPledge.hasClass('input-black-stand')) {
            $(this).siblings('.error-message').html('Minimum pledge is $75');
        }

        if ($(this).siblings('.error-message').css('display') == 'none') {
            $(this).siblings('.error-message').slideToggle();
        }

        return false;
    }
});
// End of Validate input pledge ----------------------------------

const selectedInputRadio = (inputRadio) => {
    inputRadio
        .parent()
        .parent()
        .parent()
        .css('border', '2px solid hsl(176, 50%, 47%)');
    inputRadio
        .parent()
        .parent()
        .siblings('.modal__selection__form')
        .slideToggle();
};

const clearInputRadio = () => {
    $("input[type='radio']").prop('checked', false);
    $("input[type='radio']")
        .parent()
        .parent()
        .parent()
        .css('border', '2px solid transparent');

    $("input[type='radio']")
        .parent()
        .parent()
        .siblings('.modal__selection__form')
        .hide();
};

$('.btn-select-reward').click(function (e) {
    e.preventDefault();
    $('.modal-overlay').fadeToggle();
    $('.modal').slideToggle();

    if ($(this).hasClass('bamboo-stand')) {
        $('#bamboo-stand').prop('checked', true);
        selectedInputRadio($('#bamboo-stand'));

        window.scrollTo({ top: 300, behavior: 'smooth' });
    } else if ($(this).hasClass('black-stand')) {
        $('#black-stand').prop('checked', true);
        selectedInputRadio($('#black-stand'));

        window.scrollTo({ top: 650, behavior: 'smooth' });
    }
});

modalOverlay.click((e) => {
    $('.modal-overlay').fadeToggle();
    $('.modal').slideToggle();
    clearInputRadio();
});

$('.icon-close-modal').click((e) => {
    $('.modal-overlay').fadeToggle();
    $('.modal').slideToggle();
    clearInputRadio();
});

$('.btn-got-it').click((e) => {
    e.preventDefault();

    let radioParent = $('.back-project').parent().parent();
    radioParent.css('border', '2px solid transparent');

    $('.modal-overlay').fadeToggle();
    modalSuccess.slideToggle();
    $("input[type='radio']:checked").prop('checked', false);

    clearInputRadio();
});

// ---------------------------------------------------------------
