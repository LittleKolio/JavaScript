/**
 * Created by LittleKolio on 10/6/2016.
 */
function split(code) {
    if (Array.isArray(code))
        code = code[0];
    console.log(code.split(/[\s(),.;]+/g).join('\n'));
}

split(['let sum = 4 * 4,b = "wow";']);
/**
 let
 sum
 =
 4
 *
 4
 b
 =
 "wow"
 */

split(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);
/**
 let
 sum
 =
 1
 +
 2
 if
 sum
 >
 2
 {
 console
 log
 sum
 }
 */