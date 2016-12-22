function olee() {
    // създава ме обект със конкретен прототи
    let result = Object.create({});
    result.extend = function (temp) {
        for (let key in temp) {
            if (typeof temp[key] == 'function')
                Object.getPrototypeOf(result)[key] = temp[key];
            result[key] = temp[key];
        }
    };
    return result;
}

let obj = olee();
obj.extend();