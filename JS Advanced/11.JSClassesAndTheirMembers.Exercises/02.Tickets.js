function database(arr, sort) {

    let arrayTicket = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let e of arr) {
        let [destination, price, status] = e.split('|');
        let temp = new Ticket(
            destination, price, status
        );
        arrayTicket.push(temp);
    }

    return arrayTicket.sort((f, s) => {
        let first = f[sort];
        let second = s[sort];
        if (sort == 'price') {
            return first - second;
        }
        return first.localeCompare(second);
    });
}

console.log(database(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'price'
));