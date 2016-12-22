/**
 * Created by LittleKolio on 10/6/2016.
 */
function emailValidation(email) {
    if (Array.isArray(email))
        email = email[0];
    let pattern = /^([\d\w_%\.]+)(\@[a-z\-]+)((\.[a-z]+)+)$/g;
    if (pattern.test(email))
        console.log('Valid');
    else
        console.log('Invalid');
}

emailValidation('valid@email.bg'); // Valid

emailValidation('invalid@emai1.bg'); // Invalid