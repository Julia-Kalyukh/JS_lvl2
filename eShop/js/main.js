class Product {
    constructor(product, img = 'https://placehold.it/120x100') {
        let { title = "Название товара", price = 100, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="product_item">
                  <img src="${this.img}" alt="${this.title}">
                  <div class="description">
                      <h3 class="title">${this.title}</h3>
                      <p class="price">${this.price}</p>
                      <button class="buy_btn">Добавить</button>
                  </div>
              </div>`
    }

}

class ProductsList {
    constructor(container = '.products') {
        this.data = [];
        this.products = [];
        this.container = document.querySelector(container);
        this._fetchData();
        this._render();
    }

    init() {}

    // 2. Добавьте для ProductsList метод, определяющий суммарную стоимость всех товаров. 

    calcSum (){
        let initialValue = 0;
        return this.products.reduce((accumulator, currentValue) => accumulator + currentValue.price, initialValue);
    }


    _fetchData() {
        this.data = [
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
    }

    _render() {
        for (let dataEl of this.data) {
            const product = new Product(dataEl);
            this.products.push(product);
            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

const list = new ProductsList();

// выведение результата

alert("Сумма = " + list.calcSum()); 

/*class Cart {
    constructor() {
        let { title = "Название товара", price = 100, id } = product;
        this.title = title;
        this.img = img;
        this.price = price;
        this.id = id;
    }

    Возможные методы:
    1. Добавление товара - Cart.addItem( $object );
    2. Удаление товара - Cart.removeItem( variant_id [, $link] );
    3. Пересчет корзины - Cart.recalculateOrder( form );
    4. Обновление состава корзины - 'onCart_Update' - возвращает актуальный состав корзины.
*/

   
