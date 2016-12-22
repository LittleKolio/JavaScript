/**
 * Created by LittleKolio on 10/6/2016.
 */
function bill(input) {
    let purchases = input.filter(x => !Number(x));
    let bill = input
        .filter(x => Number(x))
        .map(Number)
        .reduce((a, b) => a + b);
    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${bill}`)
}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']); // You purchased Beer Zagorka, Tripe soup, Lasagna for a total sum of 16.14

bill(['Cola', '1.35', 'Pancakes', '2.88']); // You purchased Cola, Pancakes for a total sum of 4.23