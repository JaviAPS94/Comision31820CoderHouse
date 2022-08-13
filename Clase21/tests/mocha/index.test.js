const Todos = require('./todos');
const assert = require('assert').strict;
const fs = require('fs');

describe('Test de integracion de tareas', () => {
    it('deberia crear el contenedor de tareas vacío', () => {
        const todos = new Todos();
        assert.strictEqual(todos.list().length, 0);
    });

    it('deberia adicionar tareas correctamente', () =>{
        const todos = new Todos();
        assert.strictEqual(todos.list().length, 0);

        todos.add('tarea 1');
        assert.strictEqual(todos.list().length, 1);
        todos.add('tarea 2');
        assert.strictEqual(todos.list().length, 2);
    });

    it('deberia marcar una tarea como completa', () => {
        const todos = new Todos();

        todos.add('tarea 1');
        assert.deepStrictEqual(todos.list(), [{title: 'tarea 1', complete: false}]);
        todos.complete('tarea 1');
        assert.deepStrictEqual(todos.list(), [{ title: 'tarea 1', complete: true }]);
    });
});

describe('comprobar error en completar tarea inexistente', () => {
    it('deberia dar error por que no hay tareas', () => {
        const todos = new Todos();
        const errorEsperado = new Error('No hay tareas');
        assert.throws(() => {
            todos.complete('Tarea 1');
        }, errorEsperado);
    });
    it('deberia dar error por tarea no encontrada', () => {
        const todos = new Todos();
        const errorEsperado = new Error('Tarea no encontrada');

        todos.add('Tarea 1');

        assert.throws(() => {
            todos.complete('Tarea 2');
        }, errorEsperado);
    })
});

describe('saveToFileCb funcione bien', () => {
    it('deberia guardar una tarea en el archivo todo.txt', (done) => {
        const todos = new Todos();
        todos.add('Tarea 1');
        todos.saveToFileCb( err => {
            assert.strictEqual(fs.existsSync('todos.txt'), true);
            let contenidoEsperado = 'Tarea 1, false';
            let content = fs.readFileSync('todos.txt').toString();
            assert.strictEqual(content, contenidoEsperado);
            done(err);
        });
    });
});

//2da parte
describe('saveToFilePromises funcione bien', () => {
    before(() => {
        console.log('\n===================================================');
    });
    after(() => {
        console.log('\n===================================================');
    });
    beforeEach(() => {
        this.todos = new Todos();
    });

    afterEach(() => {
        if(fs.existsSync('todos.txt')){
            fs.unlinkSync('todos.txt');
        }
    });

    it('deberia guardar una tarea en el archivo todo.txt', () => {
        // const todos = new Todos();
        // todos.add('Tarea 2');
        this.todos.add('Tarea 2');
        // return todos.saveToFilePromise().then(()  => {
        return this.todos.saveToFilePromise().then(()  => {
            assert.strictEqual(fs.existsSync('todos.txt'), true);
            let contenidoEsperado = 'Tarea 2, false';
            let content = fs.readFileSync('todos.txt').toString();
            assert.strictEqual(content, contenidoEsperado);
        });
    });

    it('deberia guardar una tarea en el archivo todo.txt Async/Await ', async () => {
        // const todos = new Todos();
        // todos.add('Tarea 3');
        this.todos.add('Tarea 3');
        // await todos.saveToFilePromise();
        await this.todos.saveToFilePromise();
        assert.strictEqual(fs.existsSync('todos.txt'), true);
        let contenidoEsperado = 'Tarea 3, false';
        let content = fs.readFileSync('todos.txt').toString();
        assert.strictEqual(content, contenidoEsperado);

    });
});

