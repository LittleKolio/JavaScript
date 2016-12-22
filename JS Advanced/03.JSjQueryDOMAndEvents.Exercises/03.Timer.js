/**
 * Created by LittleKolio on 10/23/2016.
 */
function timer() {
    let count = 0, counting;
    $('#start-timer').on('click', function() {
        counting = setInterval(increment, 1000);
    });
    $('#stop-timer').on('click', function() {
        clearInterval(counting);
    });
    function increment() {
        count++;
        let s = count % 60;
        $('#seconds').text(('0' + s).slice(-2));
        let m = Math.trunc(count / 60) % 60;
        $('#minutes').text(('0' + m).slice(-2));
        let h = Math.trunc(count / 3600) % 24;
        $('#hours').text(('0' + h).slice(-2));
    }
}