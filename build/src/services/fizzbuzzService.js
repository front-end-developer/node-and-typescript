"use strict";
var genericType = function (item) {
    return item;
};
function fizzbuzzService() {
    function getSomeAPIData() {
        return new Promise(function (resolve, reject) {
            var fizz = 'fuzz';
            var buzz = 'buzz';
            var list = [];
            var listItems = '';
            for (var i = 1; i <= 100; i++) {
                if ((i % 3 === 0) && (i % 5 === 0)) {
                    listItems = genericType("" + fizz + buzz);
                }
                else if (i % 3 === 0) {
                    listItems = genericType(fizz);
                }
                else if (i % 5 === 0) {
                    listItems = genericType(buzz);
                }
                else {
                    listItems = genericType(i);
                }
                list.push(listItems);
            }
            console.log('list:', list);
            resolve({
                list: list
            });
        });
    }
    return {
        getSomeAPIData: getSomeAPIData
    };
}
module.exports = fizzbuzzService();
