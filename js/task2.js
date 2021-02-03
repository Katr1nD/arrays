let cart = [{
        name: "White Russian",
        count: 4,
        price: 100,
    },
    {
        name: "Daiquiri",
        count: 1,
        price: 110,
    },
    {
        name: "Long Island ice tea",
        count: 4,
        price: 120,
    },
    {
        name: "Gin and Tonics",
        count: 3,
        price: 95,
    },
    {
        name: "Bloody Mary",
        count: 2,
        price: 115,
    },
];

function addProduct() {
    const product = document.getElementById('product').value;
    const count = document.getElementById('count').value;
    const price = document.getElementById('price').value;
    const index = cart.findIndex(item => item.name.toLowerCase() === product.toLowerCase());

    if (index !== -1) {
        cart[index].count++;
    } else {
        cart.push({
            name: product,
            count: Number(count),
            price: Number(price),
        });
    }

    showBill();
}

function showBill() {
    document.getElementById('bill').innerHTML = cart
        .map(item => `<li>${item.name}: ${item.count}pcs * ${item.price} &#8372; = ${item.price*item.count} &#8372;</li>`)
        .join('');

    document.getElementById('sum').innerHTML =
        `Total bill amount: ${cart.reduce((a, b) => (a + b.price * b.count), 0)} &#8372;`;

    document.getElementById('theMostExpensive').innerHTML =
        `The most expensive item: ${cart.reduce((a, b) => Math.max(a, b.price), 0)} &#8372;`;

    document.getElementById('average').innerHTML =
        `Average cost of goods: ${Math.floor(cart.reduce((a, b) => (a + b.price), 0) / cart.length)} &#8372;`;
}

showBill();