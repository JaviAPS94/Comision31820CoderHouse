import admin from "firebase-admin";
import fs from "fs";

const serviceAccount = JSON.parse( fs.readFileSync( "./db/coderhouse-725d3-firebase-adminsdk-cm2tb-f8f7ea8780.json", "utf8" ) );

admin.initializeApp( {
	credential: admin.credential.cert( serviceAccount ),
	databaseURL: "https://coderhouse-725d3.firebaseio.com"
} );

console.log( "Base de datos firebase conectada" );

const db = admin.firestore();
const colors = db.collection( "colors" );

// await colors.doc().set({ nombre: "red" });
// await colors.doc().set({ nombre: "green" });
// await colors.doc().set({ nombre: "blue" });

// console.log("Colores insertados correctamente");

// const snapshot = await colors.get();
// snapshot.forEach(doc => {
//     console.log({ id: doc.id, ...doc.data() })
// });

// const item = await colors.doc('766cVCHtzTIVcgwEfjQd').update({ nombre: "navy" });
// console.log("El color ha sido actualizado", item);

const item = await colors.doc('mX7d1Oz0dZl4Pwq0n4nR').delete();
console.log("El color ha sido eliminado", item);