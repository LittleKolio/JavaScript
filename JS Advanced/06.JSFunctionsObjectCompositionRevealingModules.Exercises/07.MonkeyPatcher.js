/**
 * Created by LittleKolio on 10/31/2016.
 */
/*
function call(obj, ...args) {
    let newObj = Object.create(obj);
    let process = (function() {
        function upvote() { newObj['upvotes'] += 1; }
        function downvote() { newObj['downvotes'] += 1; }
        function score() {
            let rating,
                upV = newObj['upvotes'],
                downV = newObj['downvotes'],
                num = 0;
            switch (true) {
                case (
                    (upV + downV) < 10
                ): rating = 'new'; break;
                case (
                    upV > downV &&
                    (upV / (upV + downV)) > 0.66
                ): rating = 'hot'; break;
                case (
                    upV == downV &&
                    (upV > 100 && downV > 100)
                ): rating = 'controversial'; break;
                case (downV > upV): rating = 'unpopular'; break;
                default: rating = 'new'; break;
            }
            if ((upV + downV) > 50)
                num = upV > downV ? upV * 0.25 : downV * 0.25;
            return [
                Math.ceil(upV + num),
                Math.ceil(downV + num),
                upV - downV,
                rating
            ];
        }
        return {upvote, downvote, score}
    })();
    for (let arg of args) {
        process[arg]();
    }
}
*/

function forum(input) {
    switch (input) {
        case 'upvote': this.upvotes += 1; break;
        case 'downvote': this.downvotes += 1; break;
        case 'score': return score(this); break;
    }
    function score(obj) {
        let rating = '',
            upV = obj['upvotes'],
            downV = obj['downvotes'],
            mod = 0;
        switch (true) {
            case (upV + downV) < 10: rating = 'new'; break;
            case downV > upV: rating = 'unpopular'; break;
            case (upV / (upV + downV)) > 0.66: rating = 'hot'; break;
            case upV > 100: rating = 'controversial'; break;
            default: rating = 'new'; break;
        }
        if ((upV + downV) > 50)
            mod = Math.ceil(
                (upV > downV ? upV : downV) * 0.25
            );
        return [
            upV + mod,
            downV + mod,
            upV - downV,
            rating
        ];
    }
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};
console.log(forum.call(post, 'upvote'));
console.log(forum.call(post, 'score'));
console.log(post);