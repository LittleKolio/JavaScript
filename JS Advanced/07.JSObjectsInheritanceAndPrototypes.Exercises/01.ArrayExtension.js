/**
 * Created by LittleKolio on 10/31/2016.
 */
(function nameFunc() {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
    Array.prototype.skip = function(n) {
        let result = [];
        for (let i = n, j = this.length; i < j; i++)
            result.push(this[i]);
        return result;
    };
    Array.prototype.take = function(n) {
        let result = [];
        for (let i = 0, j = n; i < j; i++)
            result.push(this[i]);
        return result;
    };
    Array.prototype.sum = function() {
        let result = 0;
        for (let i = 0, j = this.length; i < j; i++)
            result += this[i];
        return result;
    };
    Array.prototype.average = function() {
        let sum = this.sum();
        return sum / this.length;
    }
})();