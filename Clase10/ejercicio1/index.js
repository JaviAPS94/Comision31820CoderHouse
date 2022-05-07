import mongoose from 'mongoose';

const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 },
];

const studentSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    ingreso: { type: Boolean, default: false }
});

const URL = 'mongodb://localhost:27017/colegio';

const studentsDAO = mongoose.model('estudiantes', studentSchema);

// Conexión a la base de datos

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

try {
    //Punto 1
    // let studentUpdated = await studentsDAO.updateOne({
    //     nombre: 'Lucas',
    //     apellido: 'Blanco'
    // }, { dni: '20355875' })
    // console.log(studentUpdated);
    //Punto 2
    // let studentUpdated = await studentsDAO.updateMany({}, { ingreso: false })
    // console.log(studentUpdated);
    //Punto 3
    // let studentUpdated = await studentsDAO.updateMany({ curso: '1A' }, { ingreso: true })
    // console.log(studentUpdated);
    //Punto 4
    // let studentsApproved = await studentsDAO.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 })
    // console.log(studentsApproved);
    //Punto 5
    // let studentsApproved = await studentsDAO.find({ ingreso: true }, { _id: 0, __v: 0 })
    // console.log(studentsApproved);
    //Punto 6
    let result = await studentsDAO.deleteMany({ ingreso: true});
    console.log(result);
} catch (error) {
    console.log(error);
}
    // .then(() => {
    //     console.log('Base de datos conectada');

    //     //Punto 1
    //     studentsDAO.find({}).sort({ nombre: 1 })
    //         .then(estudiantes => {
    //             estudiantes.forEach(estudiante => {
    //                 //console.log(JSON.stringify(estudiante));
    //             });
    //         })
    //     //Punto 2
    //     studentsDAO.find({}).sort({ edad: 1 }).limit(1)
    //         .then(estudiante => {
    //             //console.log(estudiante);
    //         })
    //     //Punto 3
    //     studentsDAO.find({ curso: '2A' })
    //         .then(estudiantes => {
    //             estudiantes.forEach(estudiante => {
    //                 //console.log(JSON.stringify(estudiante));
    //             });
    //         })
    //     //Punto 4
    //     studentsDAO.find({}).sort({ edad: 1 }).skip(1).limit(1)
    //         .then(estudiante => {
    //             //console.log(estudiante);
    //         })
    //     //Punto 5
    //     studentsDAO.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 }).sort({ apellido: -1 })
    //         .then(estudiantes => {
    //             estudiantes.forEach(estudiante => {
    //                 //console.log(JSON.stringify(estudiante));
    //             });
    //         })
    //     //Punto 6
    //     studentsDAO.find({ nota: 10 })
    //         .then(estudiantes => {
    //             estudiantes.forEach(estudiante => {
    //                 //console.log(JSON.stringify(estudiante));
    //             });
    //         })
    //     //Punto 7
    //     studentsDAO.find({})
    //         .then(estudiantes => {
    //             let sum = 0;
    //             estudiantes.forEach(estudiante => {
    //                 sum += estudiante.nota
    //             })
    //             //console.log(`Promedio: ${(sum / estudiantes.length).toFixed(2)}`);
    //         })
    //     //Punto 8
    //     studentsDAO.find({ curso: '1A' })
    //         .then(estudiantes => {
    //             let sum = 0;
    //             estudiantes.forEach(estudiante => {
    //                 sum += estudiante.nota
    //             })
    //             console.log(`Promedio: ${(sum / estudiantes.length).toFixed(2)}`);
    //         })
    // })

// console.log('Base de datos conectada');

//Escritura a la base de datos

// const registers = [];

// for (const estudiante of estudiantes) {
//     registers.push(studentsDAO.create(estudiante));
// }

// const results = await Promise.allSettled(registers);
// const rejected = results.filter(r => r.status == 'rejected');

// if (rejected.length > 0) {
//     console.log(rejected);
// } else {
//     console.log('todo ok');
// }

// await mongoose.disconnect();

