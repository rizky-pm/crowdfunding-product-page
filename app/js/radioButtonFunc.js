// Radio Button Functionality-------------------------------------

let inputPledgeFields = $('.modal__selection__form');
inputPledgeFields.hide();

let errorMessage = $('.error-message');
errorMessage.hide();

let selectedRadio;

let modalSelections = $('.modal__selection');

let header = document.getElementById('header');

const data = {
    progress: {
        moneyBacked: 89914,
        totalBackers: 5007,
        daysLeft: 56,
    },
    stock: {
        bambooStand: 101,
        blackStand: 64,
        mahoganyStand: 0,
    },
};

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
let stockBambooNewValue = data.stock.bambooStand;

$('.form__button').click(function (e) {
    const inputPledge = $(this)
        .siblings('.form__input-container')
        .children('#input-pledge');

    const currentOption = $(this)
        .parent()
        .parent()
        .siblings('.modal__selection__content')
        .children('.modal__selection__content__input')
        .children("input[type='radio']");

    if (inputPledge.val() >= 25) {
        if ($(this).siblings('.error-message').css('display') != 'none') {
            $(this).siblings('.error-message').slideToggle();
        }

        $('.modal').hide();
        $('.modal-success').fadeToggle();

        data.progress.moneyBacked += parseInt(inputPledge.val());
        data.progress.totalBackers += 1;
        $('.money-backed').text(
            `$\n${numberWithCommas(data.progress.moneyBacked)}`
        );
        $('.backer-progress').attr('value', data.progress.moneyBacked);
        $('.total-backers').text(numberWithCommas(data.progress.totalBackers));

        switch (currentOption.attr('id')) {
            case 'no-reward':
                break;
            case 'bamboo-stand':
                data.stock.bambooStand -= 1;
                $('.bamboo-stand-left').text(data.stock.bambooStand);
                $('.input-black-stand').val('');

            case 'black-stand':
                data.stock.blackStand -= 1;
                $('.black-stand-left').text(data.stock.blackStand);
                $('.input-bamboo-stand').val('');

            default:
                break;
        }

        if (data.stock.bambooStand === 0) {
            $('.selection-bamboo').addClass('disabled');
        } else if (data.stock.blackStand === 0) {
            $('.selection-bamboo').addClass('disabled');
        }

        return true;
    } else if (inputPledge.val() == '') {
        $(this).siblings('.error-message').html("Pledge can't be empty");

        if ($(this).siblings('.error-message').css('display') == 'none') {
            $(this).siblings('.error-message').slideToggle();
        }

        return false;
    } else if (inputPledge.val() < 25) {
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
    selectedRadio = inputRadio
        .parent()
        .parent()
        .siblings('.modal__selection__form');

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
    selectedRadio = undefined;
});

$('.icon-close-modal').click((e) => {
    $('.modal-overlay').fadeToggle();
    $('.modal').slideToggle();
    clearInputRadio();
    selectedRadio = undefined;
});

$('.btn-got-it').click((e) => {
    e.preventDefault();

    let radioParent = $('.back-project').parent().parent();
    radioParent.css('border', '2px solid transparent');

    $('.modal-overlay').fadeToggle();
    modalSuccess.slideToggle();
    $("input[type='radio']:checked").prop('checked', false);

    clearInputRadio();
    selectedRadio = undefined;
});

// ---------------------------------------------------------------

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

$(document).ready(function () {
    $('.money-backed').text(
        `$\n${numberWithCommas(data.progress.moneyBacked)}`
    );
    $('.total-backers').text(numberWithCommas(data.progress.totalBackers));
    $('.days-left').text(numberWithCommas(data.progress.daysLeft));
    $('.backer-progress').attr('value', data.progress.moneyBacked);
    $('.bamboo-stand-left').text(data.stock.bambooStand);
    $('.black-stand-left').text(data.stock.blackStand);
});
