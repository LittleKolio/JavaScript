/**
 * Created by LittleKolio on 10/12/2016.
 */
function components(input) {
    let listOfComp = new Map();
    for (let line of input) {
        let [system, comp, subcomp] = line.split(' | ');
        if (!listOfComp.has(system))
            listOfComp.set(system, new Map());
        if (!listOfComp.get(system).has(comp))
            listOfComp.get(system).set(comp, new Set());
        listOfComp.get(system).get(comp).add(subcomp);
    }

    let sortedList = [...listOfComp].sort(sortPotato);

    for (let [sys, val1] of sortedList) {
        console.log(sys);
        let sortedVal1 = [...val1].sort(sortPepper);
        for (let [comp, val2] of sortedVal1) {
            console.log('|||' + comp);
            for (let subcomp of val2)
                console.log('||||||' + subcomp);
        }
    }

    function sortPotato(n, m) {
        let result =  m[1].size - n[1].size;
        if (result == 0)
            result = (n[0].toLowerCase()).localeCompare(m[0].toLowerCase());
        return result;
    }

    function sortPepper(k, l) {
        return l[1].size - k[1].size;
    }
}

components([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);
/**
 Lambda
 |||CoreA
 ||||||A23
 ||||||A24
 ||||||A25
 |||CoreB
 ||||||B24
 |||CoreC
 ||||||C4
 SULS
 |||Main Site
 ||||||Home Page
 ||||||Login Page
 ||||||Register Page
 |||Judge Site
 ||||||Login Page
 ||||||Submittion Page
 |||Digital Site
 ||||||Login Page
 Indice
 |||Session
 ||||||Default Storage
 ||||||Default Security
 */