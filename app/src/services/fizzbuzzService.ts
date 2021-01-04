/**
 * Created by Mark Webley on 03/01/2021.
 */

const genericType = <T>(item: T): T => {
    return item;
}

function fizzbuzzService() {
    function getSomeAPIData() {
        return new Promise((resolve, reject) => {
            const fizz:string = 'fuzz';
            const buzz:string = 'buzz';
            let list:Array<string|number> = [];
            let listItems:any = '';

            for (let i = 1; i <= 100; i++) {
                if ((i % 3 === 0) && (i % 5 === 0)) {
                    listItems = genericType<string>(`${fizz}${buzz}`);
                }
                else if (i % 3 === 0) {
                    listItems = genericType<string>(fizz);
                }
                else if (i % 5 === 0) {
                    listItems = genericType<string>(buzz);
                }
                else {
                    listItems = genericType<number>(i);
                }
                list.push(listItems);
            }
            resolve({
                list
            });
        });
    }
    return {
        getSomeAPIData
    }
}

module.exports = fizzbuzzService();
