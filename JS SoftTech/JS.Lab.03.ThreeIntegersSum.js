/**
 * Created by LittleKolio on 6/18/2016.
 */

function sum(arr) {
    console.log(arr);
    var nums = arr[0].split(' ').map(Number);
    console.log(nums);
    console.log(
        calc(nums[0], nums[1], nums[2]) ||
        calc(nums[0], nums[2], nums[1]) ||
        calc(nums[2], nums[1], nums[0]) || 'No'
    );
    function calc(num1, num2, num3) {
        if (num1 > num2)
            [num1, num2] = [num2, num1];

        if (num1 + num2 != num3)
            return false;

        return `${num1} + ${num2} = ${num3}`;
    }
}
sum(['20 10 30']);
