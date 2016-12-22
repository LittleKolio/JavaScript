/**
 * Created by LittleKolio on 11/1/2016.
 */
function carFactory(obj) {
    let power = function () {
        let p = this.power;
        switch (true) {
            case p <= 90: return { power: 90, volume: 1800 };
                break;
            case p <= 120: return { power: 120, volume: 2400 };
                break;
            case p > 120: return { power: 200, volume: 3500 };
                break;
        }
    };
    let wheels = function () {
        let size = this.wheelsize +
            (this.wheelsize % 2) - 1;
        return [size, size, size, size];
    };

    let result = {
        model: obj.model,
        engine: power.call(obj),
        carriage: {
            type: obj.carriage,
            color: obj.color
        },
        wheels: wheels.call(obj)
    };
    return result;
    // console.log(result);
}

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});