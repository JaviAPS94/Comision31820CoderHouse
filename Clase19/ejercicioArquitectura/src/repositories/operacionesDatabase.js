import { MongoClient } from 'mongodb';
import config from '../config.js';

const uri = config.mongodb.cnxStr;
const options = config.mongodb.options;
const client = new MongoClient(uri, options);
await client.connect();
const collection = client.db('coderhouse').collection('operaciones');

async function getAll() {
    try {
        let docs = await collection.find({}, { _id: 0, __v: 0 }).toArray()
        return docs;
    } catch (error) {
        throw new Error(`Error al listar operaciones: ${error}`);
    }
}

async function guardar(dato) {
    try {
        let doc = await collection.insertOne(dato);
        return doc;
    } catch (error) {
        throw new Error(`Error al guardar operación: ${error}`);
    }
}

export {
    getAll,
    guardar
}