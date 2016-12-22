/**
 * Created by LittleKolio on 10/4/2016.
 */


/**
 * sequence ATCGTTAGGG
 */

function helix(num) {
    let dna = 'ATCGTTAGGG';
    let l = dna.length;

    for (let row = 1, star = -2, line = 0; row <= Number(num); row++, star++, line++) {
        let result = '';
        result += '*'.repeat(Math.abs(star));
        result += '' + dna[((row - 1) * 2) % l];
        result += '-'.repeat(Math.abs(line * 2));
        result += '' + dna[(((row - 1) * 2) % l) + 1];
        result += '*'.repeat(Math.abs(star));
        console.log(result);

        if (star == 2)
            star *= -1;
        if (line == 2)
            line *= -1;
    }
}

function helix2(num) {
    let dna = 'ATCGTTAGGG';
    let l = dna.length;
    let index = 0;

    for (let i = 0; i < num; i++) {
        let row = i % 4;
        if (row == 0)
            console.log(`**${dna[index++ % l]}${dna[index++ % l]}**`);
        else if (row == 1 || row == 3)
            console.log(`*${dna[index++ % l]}--${dna[index++ % l]}*`);
        else
            console.log(`${dna[index++ % l]}----${dna[index++ % l]}`);
    }
}

helix(4);
/**
 **AT**
 *C--G*
 T----T
 *A--G*
 */


helix(10);
/**
 **AT**
 *C--G*
 T----T
 *A--G*
 **GG**
 *A--T*
 C----G
 *T--T*
 **AG**
 *G--G*
 */

helix2(10);