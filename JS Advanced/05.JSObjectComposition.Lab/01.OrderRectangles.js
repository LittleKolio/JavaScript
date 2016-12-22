/**
 * Created by LittleKolio on 10/27/2016.
 */
function orderRects(input) {
    let rects = [];
    for (let [width, height] of input) {
        let rect = createRect(width, height);
        rects.push(rect);
    }
    rects.sort((a, b) => a.compareTo(b));
    return rects;

    function createRect(width, height) {
        let rect = {
            width: width,
            height: height,
            area: function () {
                return rect.width * rect.height;
            },
            compareTo: function (other) {
                let result = other.area() - rect.area();
                // ако result е 0 тогава вземи израза в ()
                return result || (other.width - rect.width);
            }
        };
        return rect;
    }
}

console.log(
    orderRects([
        [10,5],
        [5,12]
    ])
);

orderRects([
    [10,5],
    [3,20],
    [5,12]
]);
