/**
 * Created by LittleKolio on 9/25/2016.
 */
function fruitOrVegetable(input) {
    switch (input[0]) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit'); break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable'); break;
        default: console.log('unknown'); break;
    }
}