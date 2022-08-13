import NoticiasMongoDAO from './noticiasMongoDao.js'

class NoticiasFactoryDAO {
    static get(tipo){
        switch (tipo) {
            case 'MONGO':
                return new NoticiasMongoDAO('mibase', 'noticias');
            default:
                return new NoticiasMongoDAO('mibase', 'noticias');
        }
    }
}

export default NoticiasFactoryDAO