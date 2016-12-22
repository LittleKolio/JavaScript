/**
 * Created by LittleKolio on 10/14/2016.
 */
function daggersAndSwords(input) {
    let blades = [
        '*rap-poker',
        'blade',
        'quite a blade',
        'pants-scraper',
        'frog-butcher'
    ];
    input = input.map(Math.floor).filter(b => b > 10);
    let html = '<table border="1">\n' +
        '<thead>\n<tr><th colspan="3">Blades</th></tr>\n' +
        '<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n' +
        '</thead>\n' +
        '<tbody>\n';
    for (let i of input) {
        let length = i > 40 ? 'sword' : 'dagger';
        let div = i % 5;
        html += `<tr><td>${i}</td><td>${length}</td><td>${blades[div]}</td></tr>\n`;
    }
    html += '</tbody>\n' +
        '</table>';
    console.log(html);
}

daggersAndSwords([
    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3'
]);