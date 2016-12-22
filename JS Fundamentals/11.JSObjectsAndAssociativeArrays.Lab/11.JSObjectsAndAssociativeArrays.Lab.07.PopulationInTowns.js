/**
 * Created by LittleKolio on 10/11/2016.
 */
function populationInTown(input) {
    let population = new Map();
    for (let line of input) {
        let [town, people] = line.split(/\s*<->\s*/);
        if (!population.has(town))
            population.set(town, 0);
        population.set(town, population.get(town) + Number(people));
    }
    for (let [town, people] of population)
        console.log(town + ' : ' + people);
}

populationInTown([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
/**
 Sofia : 1200000
 Montana : 20000
 New York : 10000000
 Washington : 2345000
 Las Vegas : 1000000
 */