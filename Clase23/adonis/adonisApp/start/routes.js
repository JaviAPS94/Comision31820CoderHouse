'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => 'test')

Route.get('/botonRojo', () => 'test').middleware('auth')

const Cupcake = use('App/Models/Cupcake');

Route.get('/cupcakes', async() => {
    return await Cupcake.all();
})

Route.get('/cupcakes-view', async({view}) => {
    const cupcakes = (await Cupcake.all()).toJSON();
    return view.render('ListaCupcakes', {cupcakes})
})

Route.get('/cupcakes-view-controller', 'CupcakesController.index')