import mongoose from 'mongoose';
import * as model from './models/usuario.js';

CRUD();

async function CRUD() {
    try {
        //Conexión a la base de datos
        const URL = 'mongodb://localhost:27017/ecommerce'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');

        //CREATE
        // console.log('Create');
        // const usuario = {
        //     name: 'Alex',
        //     lastName: 'Pinaida',
        //     email: 'a.p@hotmail.com',
        //     userName: 'alexp',
        //     password: 123
        // };

        // const userSaveModel = new model.users(usuario);
        // let userSaved = await userSaveModel.save();
        // console.log(userSaved);

        //Read
        // console.log('READ');
        // let usuarios = await model.users.find({});
        // console.log(usuarios);

        //Update
        // console.log('Update');
        // let updatedUser = await model.users.updateOne({ name: 'Alex' }, {
        //     $set: { password: 58963 }
        // });
        // console.log(updatedUser);
        //Delete
        // console.log('Delete');
        // let deletedUser = await model.users.deleteOne({ name: 'Alex' });
        // console.log(deletedUser);

        //CREATE USERS
        // await new model.users({
        //     name: 'David',
        //     lastName: 'Ordonez',
        //     email: 'd.o@hotmail.com',
        //     userName: 'davido',
        //     password: 123
        // }).save();

        // await new model.users({
        //     name: 'Lucas',
        //     lastName: 'Macias',
        //     email: 'l.m@hotmail.com',
        //     userName: 'lucasm',
        //     password: 1234
        // }).save();

        // await new model.users({
        //     name: 'Angela',
        //     lastName: 'Garcia',
        //     email: 'a.g@hotmail.com',
        //     userName: 'angelag',
        //     password: 12345
        // }).save();

        // await new model.users({
        //     name: 'Alex',
        //     lastName: 'Zorzin',
        //     email: 'a.z@hotmail.com',
        //     userName: 'alexz',
        //     password: 123456
        // }).save();

        //Read with projections + filter
        //console.log(await model.users.find({ lastName: 'Zorzin' }, { name: 1, lastName: 1, email: 1, _id: 0 }))

        //Read with projection + sort
        // console.log(await model.users.find({}, { name: 1, _id: 0 }).sort({ name: -1 }));

        //Read with pagination
        console.log(await model.users.find({}, { name: 1, _id: 0 }).sort({ name: 1 }).skip(1).limit(2))
    } catch (error) {
        console.log(error);
    }
}