/**
 * Created by LittleKolio on 10/6/2016.
 */
function matchDates(text) {
    let regexp = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;
    let dates = [], match;
    for (let date of text) {
        while (match = regexp.exec(date))
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
    }
    console.log(dates.join('\n'));
}

matchDates([
    'I am born on 30-Dec-1994.',
    'This is not date: 512-Jan-1996.',
    'My father is born on the 29-Jul-1955.'
]);
/**
 30-Dec-1994 (Day: 30, Month: Dec, Year: 1994)
 29-Jul-1955 (Day: 29, Month: Jul, Year: 1955)
 */

matchDates([
    '1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.'
]);
/**
 1-Jan-1999 (Day: 1, Month: Jan, Year: 1999)
 28-Sep-2016 (Day: 28, Month: Sep, Year: 2016)
 */