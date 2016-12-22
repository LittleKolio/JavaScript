/**
 * Created by LittleKolio on 10/30/2016.
 */
(function () {
    let solution = {
        add: (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]],
        multiply: (v1, s) => [v1[0] * s, v1[1] * s],
        length: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]),
        dot: (v1, v2) => (v1[0] * v2[0] + v1[1] * v2[1]),
        cross: (v1, v2) => (v1[0] * v2[1] - v1[1] * v2[0]),
    };
    return solution;
})();

let solution = {
    add: (v1, v2) => [v1[0] + v2[0], v1[1] + v2[1]],
    multiply: (v1, s) => [v1[0] * s, v1[1] * s],
    length: (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]),
    dot: (v1, v2) => (v1[0] * v2[0] + v1[1] * v2[1]),
    cross: (v1, v2) => (v1[0] * v2[1] - v1[1] * v2[0]),
};
console.log(
solution.add([1, 1], [1, 0]) + '\n' +
solution.multiply([3.5, -2], 2) + '\n' +
solution.length([3, -4]) + '\n' +
solution.dot([1, 0], [0, -1]) + '\n' +
solution.cross([3, 7], [1, 0])
);