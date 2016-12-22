/**
 * Created by LittleKolio on 9/23/2016.
 */
function filterByAge([minAge, p1, p1Age, p2, p2Age]) {
    let person1 = {
        name: p1,
        age: Number(p1Age)
    }
    let person2 = {
        name: p2,
        age: Number(p2Age)
    }
    if (person1.age >= minAge)
        console.log(person1);
    if (person2.age >= minAge)
        console.log(person2);
}