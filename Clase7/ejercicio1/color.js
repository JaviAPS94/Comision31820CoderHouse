const getColorNumber = () => Math.floor(Math.random() * 256);

class Color {
    get() {
        let color = `RGB(${getColorNumber()},${getColorNumber()},${getColorNumber()})`;
        return color;
    }
}

const color = new Color();
console.log(color.get());