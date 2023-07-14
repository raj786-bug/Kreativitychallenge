jQuery(document).ready(function () {


    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');

    $('.registration-form input[type="text"], .registration-form input[type="email"],.registration-form input[type="password"],.registration-form input[type="date"], .registration-form select').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"], input[type="password"], textarea').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            }
            else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                $(this).next().fadeIn();
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            $(this).prev().fadeIn();
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        });

    });


});
/* email*/
$('#email, #retypeemail').on('keyup', function () {

    $('.confirm-message').removeClass('success-message').removeClass('error-message');

    let email = $('#email').val();
    let retype = $('#retypeemail').val();


    if (email === "") {
        $('.confirm-message').text("Email Field cannot be empty").addClass('error-message');
        $('#nextbtn').prop('disabled', true);
    }
    else if (retype === "") {
        $('.confirm-message').text("Confirm Email Field cannot be empty").addClass('error-message');
        $('#nextbtn').prop('disabled', true);
    }
    else if (retype === email) {
        $('.confirm-message').text('Email Match!').addClass('success-message');
        $('#nextbtn').prop('disabled', false);

    }
    else {
        $('.confirm-message').text("Email Doesn't Match!").addClass('error-message');
        $('#nextbtn').prop('disabled', true);

    }

});
/*Password confirmation*/
$('#password, #confirmpassword').on('keyup', function () {

    $('.confirm-message').removeClass('success-message').removeClass('error-message');

    let password = $('#password').val();
    let confirm_password = $('#confirmpassword').val();

    $('.confirm-message').text('Password should be atleast 5 characters!').addClass('success-message');
    if (password === "") {
        $('.confirm-message').text("Password Field cannot be empty").addClass('error-message');
        $('#nextbtn').prop('disabled', true);
    }
    else if ( confirm_password === "") {
        $('.confirm-message').text("Confirm Password Field cannot be empty").addClass('error-message');
        $('#nextbtn').prop('disabled', true);
    }
    else if ( password.length >= 5 && confirm_password === password) {
        $('.confirm-message').text('Password Match!').addClass('success-message');
        $('#nextbtn').prop('disabled', false);

    }
    else {
        $('.confirm-message').text("Password must be less than 5 character and Password Doesn't Match!").addClass('error-message');
        $('#nextbtn').prop('disabled', true);

    }
   

});
/*disabled buttonn*/

