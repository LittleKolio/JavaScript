/**
 * Created by LittleKolio on 10/13/2016.
 */
function bunny(input) {
    let damage = 0, kills = 0;
    let bombs = input.pop().split(' ');
    input = input.map(x => x.split(' ').map(Number));

    //console.log(bombs);
    //console.log(input);

    for (let bomb of bombs) {
        let [i, j] = bomb.split(',').map(Number);
        //console.log([i, j])
        let bombDam = input[i][j];
        if (bombDam == 0)
            continue;

        let startI = Math.max(0, i - 1), startJ = Math.max(0, j - 1);
        let endI = Math.min(i + 1, input.length - 1), endJ = Math.min(j + 1, input[0].length - 1);

        for (let k = startI; k <= endI; k++) {
            for (let l = startJ; l <= endJ; l++) {
                input[k][l] -= bombDam;
                if (input[k][l] < 0)
                    input[k][l] = 0;
            }
        }
        //console.log(input);

        damage += bombDam;
        kills++;
    }

    input.forEach(r => {
        r.filter(x => x > 0).forEach(y => {
            damage += y;
            kills++;
        })
    });

    console.log(damage + '\n' + kills);
    //console.log(input);
}
/**
bunny([
    '10 10 10',
    '10 10 10',
    '10 10 10',
    '0,0'
]);
 */



bunny([
    '5 10 15 20 59',
    '10 10 10 10 66',
    '10 15 10 10 20',
    '10 10 10 10 11',
    '2,2 0,1 3,4'
]);