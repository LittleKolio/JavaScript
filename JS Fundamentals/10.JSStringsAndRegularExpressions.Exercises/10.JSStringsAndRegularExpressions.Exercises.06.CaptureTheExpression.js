/**
 * Created by LittleKolio on 10/10/2016.
 */
function captureNumbers(input) {
    console.log(input.join(' ').match(/[0-9]+/g).join(' '));
    //console.log(input.join(' '));
}

captureNumbers([
    'The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]); // 300 3 22 45

captureNumbers([
    '123a456',
    '789b987',
    '654c321',
    '0'
]); // 123 456 789 987 654 321 0