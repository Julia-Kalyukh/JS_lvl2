import {Products} from './products.js';

const Shop = {
    components: {
        Products
    },
    data() {
        return {
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
            search: '',
            basketUrl: '/getBasket.json',
            basketItem: [],
            imgBasket: 'https://placehold.it/60x50',
            removeBasket: false,
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
        addProduct(product) {
            this.getJson(`${this.API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.basketItem.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.basketItem.push(prod);
                        }
                    }
                });
        },
        remove(product) {
            this.getJson(`${this.API}/deleteFromBasket.json`)
            .then(data => {
                if (data.result) {
                    if (product.quantity > 0) {
                        product.quantity--
                    } else {
                        this.basketItem.splise(this.basketItem.indexOf(product), 1);
                    }
                }
            });
        }
    },
    mounted() {
        this.getJson(`${this.API + this.cartUrl}`)
            .then(data => {
                for (let product of data.contents) {
                    this.basketItem.push(product);
                }
            });

    }
};

Vue.createApp(Shop).mount('#block');