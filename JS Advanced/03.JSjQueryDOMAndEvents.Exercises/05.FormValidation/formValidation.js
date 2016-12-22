function validate() {
    companyCheck();
    $('#company:checkbox').on('click', companyCheck);

    $('#submit').on('click', function (event) {
        let name = $('#username').val();
        let email = $('#email').val();
        let pass = $('#password').val();
        let confirmpass = $('#confirm-password').val();
        let companyNumber = $('#companyNumber').val();

        let nameBool = (/^[a-zA-Z0-9]{3,20}$/).test(name);
        let passBool = (/^\w{5,15}$/).test(pass);
        let confirmpassBool = (pass == confirmpass);
        let emailBool = (/^.+@.+\..+$/).test(email);
        let companyNumBool = (/^\d{1000,9999}$/).test(companyNumber);

        nameBool ?
            $('#username').css('border', 'none') :
            $('#username').css('border-color', 'red');
        (passBool && confirmpassBool) ?
            $('#password').css('border', 'none') :
            $('#password').css('border-color', 'red');
        (passBool && confirmpassBool) ?
            $('#confirm-password').css('border', 'none') :
            $('#confirm-password').css('border-color', 'red');
        emailBool ?
            $('#email').css('border', 'none') :
            $('#email').css('border-color', 'red');

        if ($('#company').prop('checked')) {
            companyNumBool ?
                $('#companyNumber').css('border', 'none') :
                $('#companyNumber').css('border-color', 'red');
        }

        if (nameBool && passBool && confirmpassBool && emailBool) {
            if ($('#company').prop('checked')) {
                companyNumBool ?
                    $('#valid').css('display', 'inherit') :
                    $('#valid').css('display', 'none');
            } else {
                $('#valid').css('display', 'inherit');
            }
        } else {
            $('#valid').css('display', 'none');
        }

        event.preventDefault();
    });

    function companyCheck() {
        if ($('#company').prop('checked')) {
            $('#companyInfo').css('display', 'inline-block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
