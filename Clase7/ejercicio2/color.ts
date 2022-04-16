const getColorNumber = (): number => Math.floor(Math.random() * 256);

class Color {
    get(): string {
        let color: string = `RGB(${getColorNumber()},${getColorNumber()},${getColorNumber()})`;
        return color;
    }
}

const color: Color = new Color();
console.log(color.get());