import axios from 'axios';
import got from 'got';

async function getFyH() {
    try {
        const response = await axios.get('http://localhost:8080');
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

getFyH();

async function getFyHGot() {
    try {
        const response = await got('http://localhost:8080');
        console.log(response.body);
    } catch (error) {
        console.log(error);
    }
}

getFyHGot();


async function doPostRequestAxios() {
    const payload = { number: Math.floor(Math.random() * 10) }
    const response = await axios.post('http://localhost:8080/ingreso', payload);
    console.log(response.data);
}

doPostRequestAxios();

async function getNumerosGot() {
    try {
        const response = await got('http://localhost:8080/egreso');
        console.log(response.body);
    } catch (error) {
        console.log(error);
    }
}

getNumerosGot();