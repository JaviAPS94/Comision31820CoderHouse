import NoticiasBaseDao from './noticiasBaseDao.js';
import mongodb from 'mongodb';

const { MongoClient, ObjectId } = mongodb;

class NoticiasDBMongoDAO extends NoticiasBaseDao {
    constructor(database, collection) {
        super();
        (async () => {
            console.log('Conectando a la base de datos...');
            const connection = await MongoClient.connect('mongodb://localhost', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            const db = connection.db(database);
            this._collection = db.collection(collection);
            console.log('Base de datos conectada');
        })()
    }

    obtenerNoticias = async _id => {
        console.log(_id);
        const noticia = await this._collection.findOne({ _id: ObjectId(_id) })
        console.log(noticia);
        return [noticia];
    }

    guardarNoticia = async noticia => {
        await this._collection.insertOne(noticia);
        return noticia;
    }

    actualizarNoticia = async (_id, noticia) => {
        await this._collection.updateOne({ _id: ObjectId(_id) }, { $set: noticia });
        return noticia;
    }

    borrarNoticia = async _id => {
        await this._collection.deleteOne({ _id: ObjectId(_id) });
    }
}

export default NoticiasDBMongoDAO;
