/**
 * Created by LittleKolio on 10/4/2016.
 */


/**
 Cut – cuts by 4
 Lap – removes 20%
 Grind – removes 20 microns
 Etch – removes 2 microns
 X-ray – increases 1 micron; this operation can only be done once!
 Transporting and washing – removes 1 micron (round down the number) do this after every batch of operations that remove material
 */

/**
function radioCrystals(input) {
    let crystal = input[0];
    let oper = {
        cut: function (t) {
            return t / 4;
        },
        lap: function (t) {
            return t * 0.8;
        },
        grind: function (t) {
            return t - 20;
        },
        etch: function (t) {
            return t - 2;
        }
    };

    let xray = function (t) {
        return t + 1;
    };

    let tAndW = function (t) {
        return Math.floor(t);
    };

    for (let i = 1; i < input.length; i++) {
        let ore = input[i];
        let result = `Processing chunk ${input[i]} microns`;

        for (let j of oper) {
            while (j(ore) > crystal) {
                ore = j(ore);
                console.log(ore)
            }
        }
    }
}
 */

function radioCrystals(input) {
    let crystal = Number(input[0]);

    let cut = function (t) {return t / 4;};
    let lap = function (t) {return t * 0.8;};
    let grind = function (t) {return t - 20;};
    let etch = function (t) {return t - 2;};
    let xray = function (t) {return t + 1;};

    for (let i = 1; i < input.length; i++) {
        let ore = Number(input[i]);
        let crys;
        console.log(`Processing chunk ${ore} microns`);
        let count = 0;
        let oper = '';


        oper = 'Cut';
        crys = cut(ore);
        while (crys >= crystal || Math.abs(crystal - crys) <= 1) {
            ore = cut(ore);
            count++;
            crys = cut(ore);
        }
        if (count > 0) {
            console.log(`${oper} x${count}`);
            ore = Math.floor(ore);
            console.log('Transporting and washing');
            count = 0;
        }

        oper = 'Lap';
        crys = lap(ore);
        while (crys >= crystal || Math.abs(crystal - crys) <= 1) {
            ore = lap(ore);
            count++;
            crys = lap(ore);
        }
        if (count > 0) {
            console.log(`${oper} x${count}`);
            ore = Math.floor(ore);
            console.log('Transporting and washing');
            count = 0;
        }

        oper = 'Grind';
        crys = grind(ore);
        while (crys >= crystal || Math.abs(crystal - crys) <= 1) {
            ore = grind(ore);
            count++;
            crys = grind(ore);
        }
        if (count > 0) {
            console.log(`${oper} x${count}`);
            ore = Math.floor(ore);
            console.log('Transporting and washing');
            count = 0;
        }

        oper = 'Etch';
        crys = etch(ore);
        while (crys >= crystal || Math.abs(crystal - crys) <= 1) {
            ore = etch(ore);
            count++;
            crys = etch(ore);
        }
        if (count > 0) {
            console.log(`${oper} x${count}`);
            ore = Math.floor(ore);
            console.log('Transporting and washing');
            count = 0;
        }

        if (crystal > ore) {
            ore = xray(ore);
            oper = 'X-ray';
            console.log(`${oper} x1`);
        }

        console.log(`Finished crystal ${ore} microns`);

    }
}

radioCrystals([1375, 50000]);
/**
 Processing chunk 50000 microns
 Cut x2
 Transporting and washing
 Lap x3
 Transporting and washing
 Grind x11
 Transporting and washing
 Etch x3
 Transporting and washing
 X-ray x1
 Finished crystal 1375 microns
 */


//radioCrystals([1000, 4000, 8100]);
/**
 Processing chunk 4000 microns
 Cut x1
 Transporting and washing
 Finished crystal 1000 microns
 Processing chunk 8100 microns
 Cut x1
 Transporting and washing
 Lap x3
 Transporting and washing
 Grind x1
 Transporting and washing
 Etch x8
 Transporting and washing
 Finished crystal 1000 microns
 */
