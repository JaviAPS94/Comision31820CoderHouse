import crypto from 'crypto';
import { asDto } from '../dtos/PersonaDTO.js'
import Persona from "../models/Persona.js";

export default class PersonasDaoMem {

    constructor() {
        this.personasMap = {};
    }

    getAll() {
        const personas = Object.values(this.personasMap)
        return asDto(personas);
    }

    getById(id) {
        if (!this.personasMap[id]) {
            throw new Error('Persona not found.');
        }
        return asDto(this.personasMap[id])
    }

    save(datos) {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevaPersona = new Persona(id, datos)
        this.personasMap[id] = nuevaPersona;
        return asDto(nuevaPersona);
    }

    deleteById(id) {
        if (!this.personasMap[id]) {
            throw new Error('Persona not found');
        }
        const personaBorrada = this.personasMap[id]
        delete this.personasMap[id];
        return asDto(personaBorrada);
    }

    updateById(id, datos) {
        if (!this.personasMap[id]) {
            throw new Error('Persona not found');
        }
        const personaActualizada = new Persona(id, datos)
        this.personasMap[id] = personaActualizada;
        return asDto(personaActualizada);
    }
}