/**
 * Created by LittleKolio on 10/7/2016.
 */
function print(input) {
    let delimiter = input.pop();
    console.log(input.join(delimiter));
}

print(['One', 'Two', 'Three', 'Four', 'Five', '-']);
// One-Two-Three-Four-Five

print(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);
// How about no?_I_will_not_do_it!