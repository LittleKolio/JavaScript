/**
 * Created by LittleKolio on 10/14/2016.
 */
function parser(input) {
    let data = new Map(), tempData = new Map(), mamkamu = {};

    for (let line of input) {

        let modulePatt = /^\$app\=\'(.+)\'$/g;
        let controllerPatt = /^\$(controller)\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let modelPatt = /^\$(model)\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let viewPatt = /^\$(view)\=\'(.+)\'\&app\=\'(.+)\'$/g;

        let module = modulePatt.exec(line);
        let controller = controllerPatt.exec(line);
        let model = modelPatt.exec(line);
        let view = viewPatt.exec(line);

        switch (true) {
            case (module != null): {
                create(data, module[1]);
                fromTempDataToData(module[1]);
            } break;
            case (controller != null):
                dataOrTempData(controller[1], controller[2], controller[3]); break;
            case (model != null):
                dataOrTempData(model[1], model[2], model[3]); break;
            case (view != null):
                dataOrTempData(view[1], view[2], view[3]); break;
        }
    }

    function dataOrTempData(el, elName, modName) {
        if (data.has(modName)) {
            data.get(modName).get(el + 's').push(elName);
        } else {
            if (!tempData.has(modName))
                create(tempData, modName);
            tempData.get(modName).get(el + 's').push(elName);
        }
    }
    
    function create(obj, val) {
        obj.set(val, new Map());
        obj.get(val).set('controllers', []);
        obj.get(val).set('models', []);
        obj.get(val).set('views', []);
    }

    function fromTempDataToData(modName) {
        if (tempData.has(modName))
            data.set(modName, tempData.get(modName));
    }

    let result = Array.from(data).sort(sortData);

    function sortData(mod1, mod2) {
        let c1 = mod1[1].get('controllers').length;
        let c2 = mod2[1].get('controllers').length;
        let firstSort = c2 - c1;

        if (firstSort == 0) {
            let m1 = mod1[1].get('models').length;
            let m2 = mod2[1].get('models').length;
            return m1 - m2;
        }
        return firstSort;
    }

    result.forEach(v => {
        let controllers = v[1].get('controllers').sort();
        let models = v[1].get('models').sort();
        let views = v[1].get('views').sort();

        mamkamu[v[0]] = {
            controllers: controllers,
            models: models,
            views: views
        };
    });
    
    console.log(JSON.stringify(mamkamu))
}

parser([
    "$controller='PHPController'&app='Language Parser'",
    "$controller='JavaController'&app='Language Parser'",
    "$controller='C#Controller'&app='Language Parser'",
    "$controller='C++Controller'&app='Language Parser'",
    "$app='Garbage Collector'",
    "$controller='GarbageController'&app='Garbage Collector'",
    "$controller='SpamController'&app='Garbage Collector'",
    "$app='Language Parser'"
]);

/**
 function parser(input) {
    let data = {}, tempData = {};

    for (let line of input) {

        let modulePatt = /^\$app\=\'(.+)\'$/g;
        let controllerPatt = /^\$(controller)\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let modelPatt = /^\$(model)\=\'(.+)\'\&app\=\'(.+)\'$/g;
        let viewPatt = /^\$(view)\=\'(.+)\'\&app\=\'(.+)\'$/g;

        let module = modulePatt.exec(line);
        let controller = controllerPatt.exec(line);
        let model = modelPatt.exec(line);
        let view = viewPatt.exec(line);

        switch (true) {
            case (module != null): {
                create(data, module[1]);
                fromTempDataToData(module[1]);
            } break;
            case (controller != null):
                dataOrTempData(controller[1], controller[2], controller[3]); break;
            case (model != null):
                dataOrTempData(model[1], model[2], model[3]); break;
            case (view != null):
                dataOrTempData(view[1], view[2], view[3]); break;
        }
    }

    let result =

    function sortData(mod1, mod2) {
        let c1 = mod1[1]['controllers'].length;
        let c2 = mod2[1]['controllers'].length;
        let firstSort = c2 - c1;
        if (firstSort == 0) {
            let m1 = mod1[1]['models'].length;
            let m2 = mod2[1]['models'].length;
            return m1 - m2;
        }
        return firstSort;
    }

    function dataOrTempData(el, elName, modName) {
        if (data.hasOwnProperty(modName)) {
            data[modName][el + 's'].push(elName);
        } else {
            if (!tempData.hasOwnProperty(modName))
                create(tempData, modName);
            tempData[modName][el + 's'].push(elName);
        }
    }

    function create(obj, val) {
        obj[val] = {
            controllers: [],
            models: [],
            views: []
        };
        return obj;
    }

    function fromTempDataToData(modName) {
        if (tempData.hasOwnProperty(modName))
            data[modName] = tempData[modName];
    }
}
 */