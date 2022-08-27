'use strict';

const Cupcake = use('App/Models/Cupcake');

class CupcakesController {
    async index({ response, view }) {
        const result = await Cupcake.all();
        const cupcakes = result.toJSON();
        return view.render('ListaCupcakes', { cupcakes });
    }
}

module.exports = CupcakesController;