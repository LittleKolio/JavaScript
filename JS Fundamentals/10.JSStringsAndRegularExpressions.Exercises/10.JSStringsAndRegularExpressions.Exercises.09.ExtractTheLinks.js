/**
 * Created by LittleKolio on 10/10/2016.
 */
function extractLinks(input) {
    let pattern = 'www\\.[a-zA-Z0-9-]+(\\.[a-z]+)+';
    let regexp = new RegExp(pattern);
    for (let line of input) {
        let result = regexp.exec(line);
        if (result)
            console.log(result[0]);
    }
}

extractLinks([
    'Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko'
]);
/**
 www.web-stars.com
 www.internet.com
 www.webspiders101.com
 */

extractLinks([
    'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
]);
/**
 www.london-hotels.co.uk
 www.indigo.bloggers.com
 www.rebel21.sedecrem.moc
 */