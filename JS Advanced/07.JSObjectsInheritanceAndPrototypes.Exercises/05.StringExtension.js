/**
 * Created by LittleKolio on 11/1/2016.
 */
(function malee() {
    String.prototype.isEmpty = function () {
        return this == '';
    };
    String.prototype.ensureStart = function(str) {
        if (this.startsWith(str))
            return this.toString();
        return str + this.toString();
    };
    String.prototype.ensureEnd = function(str) {
        if (this.endsWith(str))
            return this.toString();
        return this.toString() + str;
    };
    String.prototype.truncate = function(n) {
        if (this.length <= n) return this.toString();
        if (n < 4)
            return '.'.repeat(3);
        if (!this.includes(' '))
            return this.slice(0, n - 3) + '...';


        let str = this.split(' ');
        let result = str[0];
        for (let i = 1, j = str.length; i < j; i++) {
            if ((result.length + str[i].length + 4) > n) {
                return result + '...';
                break;
            }
            result += ` ${str[i]}`;
        }
    };
    String.format = function (str, ...args) {
        return str.replace(/\{(\d+)\}/g, function (match, grup) {
            if (args[Number(grup)] != undefined)
                return args[Number(grup)];
            return match;
        });
    }
})();

let strN = 'hisdgsd dhgsgdfhfgdhdfgh';
console.log(strN.truncate(9));