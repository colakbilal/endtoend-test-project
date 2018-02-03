
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  let motorcycleModel = new DataTable(['model','count']);
    motorcycleModel.add(['Yamaha MT07','34']);
    motorcycleModel.add(['Yamaha MT09','17']);
    motorcycleModel.add(['Yamaha MT25','54']);
    return motorcycleModel;

}
