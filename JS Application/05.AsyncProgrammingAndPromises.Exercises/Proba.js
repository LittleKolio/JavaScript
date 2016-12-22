let obj = JSON.parse('{"forecast":{"condition":"Rain","high":"8","low":"2"},"name":"London, UK"}');
// console.log(obj);


let outer = {
    inner1: function(obj) {
        console.log(obj.name);
    },
    inner2: function(obj) {
        outer.inner1(obj);
    }
};


outer.inner2(obj);