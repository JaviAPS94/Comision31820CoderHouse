// function funA() {
//     console.log(1);
//     funB();
//     console.log(2);
// }

// function funB() {
//     console.log(3);
//     funC();
//     console.log(4);
// }

// function funC() {
//     console.log(5);
// }

// funA();

const fs = require('fs');

const path = 'text.txt';

fs.readFile(path, 'utf-8', (err, data) => {
    console.log(data);
});

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(`suma: ${sum}`);


