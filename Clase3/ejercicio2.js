const products = [
    {
        id: 1,
        name: 'Escuadra',
        price: 323.45
    },
    {
        id: 2,
        name: 'Calculadora',
        price: 324.56
    },
    {
        id: 3,
        name: 'Globo',
        price: 45.67
    },
    {
        id: 4,
        name: 'Paleta',
        price: 456.78
    }, {
        id: 5,
        name: 'Reloj',
        price: 67.89
    },
    {
        id: 6,
        name: 'Agenda',
        price: 78.90
    }
];

function getNames(products) {
    const names = [];
    for (const product of products) {
        names.push(product.name);
    }
    // ['name1', 'name2', 'name3']
    //const names = products.map(producto => producto.name);
    // ['name1', 'name2', 'name3']
    return names.join(', ');
}

function getTotalPrice(products) {
    let total = 0;
    for (const product  of products) {
        total += product.price;
    }
    return total;
}

function averagePrice(products) {
    return getTotalPrice(products) / products.length;
}

function lessPrice(products) {
    let minor = products[0].price;
    let prod = products[0];
    for (const product of products) {
        if (product.price < minor) {
            minor = product.price;
            prod = product;
        }
    }

    return prod;
}

function maxPrice(products) {
    let max = products[0].price;
    let prod = products[0];
    for (const product of products) {
        if (product.price > max) {
            max = product.price;
            prod = product;
        }
    }

    return prod;
}

function to2Decimals(valor) {
    return Number(valor.toFixed(2));
}

const result = {
    names: getNames(products),
    total: to2Decimals(getTotalPrice(products)),
    averagePrice: to2Decimals(averagePrice(products)),
    lessPrice: lessPrice(products),
    maxPrice: maxPrice(products),
}

const result2 = {
    names: getNames(products),
    total: getTotalPrice(products),
    averagePrice: averagePrice(products),
    lessPrice: lessPrice(products),
    maxPrice: maxPrice(products),
}

console.log(result);
console.log(result2);
