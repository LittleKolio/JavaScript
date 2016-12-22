/**
 * Created by LittleKolio on 10/6/2016.
 */
function formFiller(input) {
    let [name, email, phone] = [input.shift(), input.shift(), input.shift()];
    input.forEach(line => {
        line = line.replace(/<![a-zA-Z]+!>/g, name),
        line = line.replace(/<@[a-zA-Z]+@>/g, email),
        line = line.replace(/<\+[a-zA-Z]+\+>/g, phone),
        console.log(line)
    });
}

formFiller([
    'Pesho',
    'pesho@softuni.bg',
    '90-60-90',
    'Hello, <!username!>!',
    'Welcome to your Personal profile.',
    'Here you can modify your profile freely.',
    'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
]);

/**
 Hello, Pesho!
 Welcome to your Personal profile.
 Here you can modify your profile freely.
 Your current username is: Pesho. Would you like to change that? (Y/N)
 Your current email is: pesho@softuni.bg. Would you like to change that? (Y/N)
 Your current phone number is: 90-60-90. Would you like to change that? (Y/N)
 */