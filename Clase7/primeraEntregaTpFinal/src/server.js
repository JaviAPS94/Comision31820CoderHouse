const express = require('express')
const { Router } = express

const ContenedorArchivo = require('./contenedores/ContenedorArchivo.js')

//--------------------------------------------
// instancio servidor y persistencia

const app = express()


//--------------------------------------------
// permisos de administrador MIDDLEWARES

const esAdmin = true

function crearErrorNoEsAdmin(ruta, metodo) {
    
}

function soloAdmins(req, res, next) {
}

//--------------------------------------------
// configuro router de productos

const productosRouter = new Router()

//--------------------------------------------
// configuro router de carritos

const carritosRouter = new Router()



//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', productosRouter)
app.use('/api/carritos', carritosRouter)

module.exports = app