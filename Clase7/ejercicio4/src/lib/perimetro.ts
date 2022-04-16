export class Perimetro {
    cuadrado(lado: number): number {
        return lado * 4;
    }
    rectangulo(base: number, altura: number): number {
        return (base * 2) + (altura * 2);
    }
}