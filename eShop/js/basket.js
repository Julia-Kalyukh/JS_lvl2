import {basketItem} from "./basketItem.js";
export const basket = {
    components: {
        basketItem
    },
    data() {
        return {
            basketUrl: '/getBasket.json',
            basketItem: [],
            imgBasket: 'https://placehold.it/60x50',
            removeBasket: false,
        }
    },
    methods: {
        addProduct(product) {
            this.$root.getJson(`${this.$root.API}/addToBasket.json`)
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
            this.$root.getJson(`${this.$root.API}/deleteFromBasket.json`)
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
        this.$root.getJson(`${this.$root.API + this.basketUrl}`)
            .then(data => {
                for (let product of data.contents) {
                    this.basketItem.push(product);
                }
            });

    },
    template:
    `<button class="btn_basket" type="button" @click="removeBasket = !removeBasket">Корзина</button>
        <div class="basket_block" v-show="removeBasket">
            <p v-if="!basketItem.length">Корзина пуста</p>
            <basketItem
            v-for="item of basketItem"
            :key="item.id_product"
            :img="imgBasket"
            :item="item"
            @remove
            ></basketItem>
        </div>`
}