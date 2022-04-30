import express from "express";
import { Superficie } from "./lib/superficie";
import { Perimetro } from "./lib/perimetro";

const app = express();

const superficie: Superficie = new Superficie();
const perimetro: Perimetro = new Perimetro();

function calcularSuperficePorParametro(figura: string, param1: number, param2: number) {
    const calculos = {
        cuadrado: (param1: number): number => {
            return superficie.cuadrado(param1);
        },
        rectangulo: (param1: number, param2: number): number => {
            return superficie.rectangulo(param1, param2);
        },
        default: (): number => {
            return 0;
        },
    };

    return (calculos[figura] || calculos['default'])(param1, param2);
}

app.get('/superficie/:figura/:param1/:param2?', (req, res) => {
    let { figura, param1, param2 } = req.params;

    let resultado

    switch (figura) {
        case 'cuadrado':
            resultado = superficie.cuadrado(Number(param1));
            break;
        case 'rectangulo':
            resultado = superficie.rectangulo(Number(param1), Number(param2));
            break;
        default:
            break;
    }

    res.send({
        calculo: 'superficie',
        figura,
        param1,
        param2,
        resultado
    })
});

app.get('/perimetro/:figura/:param1/:param2?', (req, res) => {
    let { figura, param1, param2 } = req.params;

    let resultado

    switch (figura) {
        case 'cuadrado':
            resultado = perimetro.cuadrado(Number(param1));
            break;
        case 'rectangulo':
            resultado = perimetro.rectangulo(Number(param1), Number(param2));
            break;
        default:
            break;
    }

    res.send({
        calculo: 'perimetro',
        figura,
        param1,
        param2,
        resultado
    })
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`conectado al puerto: ${PORT}`);
})