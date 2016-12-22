/**
 * Created by LittleKolio on 10/6/2016.
 */
function usernames(emails) {
    let names = [];
    for (let i of emails) {
        let [name, domain] = i.split('@');
        name += '.';
        domain.split('.').forEach(x => name += x[0]);
        names.push(name);
    }
    console.log(names.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']); // peshoo.gc, todor_43.mdb, foo.bc