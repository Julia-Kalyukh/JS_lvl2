

const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Keyboard', price: 200 },
    { id: 3, title: 'Mouse', price: 100 },
    { id: 4, title: 'Gamepad', price: 87 },
    { id: 5, title: 'Notebook', price: 2500},
    { id: 6, title: 'Keyboard', price: 150 },
    { id: 7, title: 'Mouse', price: 300 },
    { id: 8, title: 'Gamepad', price: 500},
    { id: 9, title: 'Notebook', price: 3000 },
    { id: 10, title: 'Keyboard', price: 100 },
    { id: 11, title: 'Mouse', price: 190 },
    { id: 12, title: 'Gamepad', price: 56 },
    { id: 13, title: 'Notebook', price: 4000},
    { id: 14, title: 'Keyboard', price: 1000 },
    { id: 15, title: 'Mouse', price: 700 },
    { id: 16, title: 'Gamepad', price: 1100},
];


const renderProduct = (product, img = 'https://placehold.it/120x100') => {
    const{title = "Название товара", price = 100} = product;
    return `<div class="product_item">
    <img src="${img}" alt="${title}">
    <div class="description">
    <h3 class="title">${title}</h3>
    <p class="price">${price}</p>
    <button class="buy_btn">Добавить</button>
    </div>
    </div>`
};

const render = productsList => {
    const productsElements = productsList.map(product => renderProduct(product)).join('');
    document.querySelector('.products').innerHTML = productsElements;
};

render(products);