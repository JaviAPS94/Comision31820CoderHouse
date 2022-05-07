const mongoose = require('mongoose');

const URL = 'mongodb+srv://javiaps94:javiaps94@cluster0.rcf6c.mongodb.net/ecommerce?retryWrites=true&w=majority'

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {
        type: String,
        unique: true
    }
});

const userModel = mongoose.model('usuarios', userSchema);

CRUD();

async function CRUD() {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
    
        let usuarios = await userModel.find({});
        console.log(usuarios);
        usuarios.forEach(usuario => {
            console.log(usuario);
        })
    } catch (error) {
       console.log(error); 
    }
}


