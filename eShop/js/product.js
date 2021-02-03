export const Product = {
    props: ['img', 'product'],
    template: `<div class="product_item" v-for="el of filterProducts" :key="el.id_product">
                <img :src="imgCatalog" :alt="el.product_name">
                <div class="desc">
                    <h3>{{ el.product_name }}</h3>
                    <p>{{ el.price }}</p>
                    <button class="buy_btn" @click="addProduct(el)">Купить</button>
                </div>
            </div>`
};