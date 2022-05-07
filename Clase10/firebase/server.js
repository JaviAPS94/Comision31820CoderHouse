
const admin = require("firebase-admin");

const serviceAccount = require('./db/coderhouse-725d3-firebase-adminsdk-cm2tb-f8f7ea8780.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://coderhouse-725d3.firebaseio.com'
});

console.log('Base firebase conectada');

CRUD();

async function CRUD() {
    const db = admin.firestore();
    const query = db.collection('usuarios');

    //CREATE
    // try {
    //     let id = 1;
    //     let doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'Alex', dni: 878973213});
    //     id ++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'Ana', dni: 43986483956});
    //     id ++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'Jose', dni: 123213123});
    //     console.log('datos insertados');
    // } catch (error) {
    //     console.log(error);
    // }

    //READ ALL
    // try {
    //     const querySnapshot = await query.get();
    //     let docs = querySnapshot.docs;

    //     const response = docs.map((doc) => ({
    //         id: doc.id,
    //         nombre: doc.data().nombre,
    //         dni: doc.data().dni
    //     }));

    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }

    //READ BY ID
    // try {
    //     let id = 2;
    //     const doc = query.doc(`${id}`);
    //     const item = await doc.get();
    //     const response = item.data();
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }

    // UPDATE
    // try {
    //     let id = 2;
    //     const doc = query.doc(`${id}`);
    //     let item = await doc.update({dni: 123})
    //     console.log(item);
    // } catch (error) {
    //     console.log(error);
    // }

    // DELETE
    try {
        let id = 1;
        const doc = query.doc(`${id}`);
        let item = await doc.delete();
        console.log(item);
    } catch (error) {
        console.log(error);
    }
}