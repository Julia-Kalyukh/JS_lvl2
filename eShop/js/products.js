import {Product} from "./product.js";

export const Products = {
    component: {
        Product
    },
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://placehold.it/120x100',
        }
    },
    /*
    methods: {
        
    },
    computed: {
        filterProducts() {
            return this.products.filter( item => RegExp(this.search, 'i').test(item.product_name));
        }
    },
    */

    mounted() {
        this.$root.getJson(`getProducts.json`)
            .then(data => {
                for (let product of data) {
                    this.products.push(product);
                }
            });
        this.$root.getJson(`${this.$root.API + this.catalogUrl}`)
            .then(data => {
                for (let product of data) {
                    this.products.push(product);
                }
            })
    },

    template: `<div class="products">
                    <Product
                    v-for="el of products"
                    :key="el.id+product"
                    :img="imgCatalog"
                    :product="el"
                    ></Product>
                </div>`
};