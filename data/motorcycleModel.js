
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  let motorcycleModel = new DataTable(['model','count']);
    motorcycleModel.add(['Yamaha MT07','35']);
    motorcycleModel.add(['Yamaha MT09','13']);
    motorcycleModel.add(['Yamaha MT25','60']);
    return motorcycleModel;

}
