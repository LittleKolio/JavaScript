/**
 * Created by LittleKolio on 10/10/2016.
 */
function capitalizeFirstLetter(text) {
    if (Array.isArray(text))
        text = text[0];
    let result = text.split(' ').map(w => func(w)).join(' ');
    function func(word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }
    console.log(result);
}

capitalizeFirstLetter(['Capitalize these words']); // Capitalize These Words

capitalizeFirstLetter(['Was that Easy? tRY thIs onE for SiZe!']); // Was That Easy? Try This One For Size!