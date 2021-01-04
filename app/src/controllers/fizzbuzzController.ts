/**
 * Created by Mark Webley on 03/01/2021.
 */
function fizzbuzzController(service: any) {
    function index(req: any, res: any) {
        (async function getSomeApiDATA(){
            const response = await service.getSomeAPIData();
            res.render('index', {
                user: 'Mark',
                list: response.list
            })
        }())
    }

    return {
        index
    }
}
module.exports = fizzbuzzController;
