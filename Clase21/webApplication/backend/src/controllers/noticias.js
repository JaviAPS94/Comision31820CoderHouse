import ServicioNoticias from '../services/noticias.js';

class ControladorNoticias {
    constructor() {
        this.servicioNoticias = new ServicioNoticias();
    }

    obtenerNoticias = async (req, res) => {
        try {
            const id = req.params.id;
            const noticia = await this.servicioNoticias.obtenerNoticias(id);
            res.send(noticia);
        } catch (error) {
            console.log('error al obtener noticias', error);
            res.status(500).json({ error: error.message });
        }
    }

    guardarNoticias = async (req, res) => {
        try {
            const noticia = req.body;
            const noticiaGuardada = await this.servicioNoticias.guardarNoticia(noticia);
            res.json(noticiaGuardada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    actualizarNoticia = async (req, res) => {
        try {
            const noticia = req.body;
            const id = req.params.id;
            const noticiaActualizada = await this.servicioNoticias.actualizarNoticia(id, noticia);
            res.json(noticiaActualizada);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    borrarNoticia = async (req, res) => {
        try {
            const id = req.params.id;
            await this.servicioNoticias.borrarNoticia(id);
            res.send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ControladorNoticias;