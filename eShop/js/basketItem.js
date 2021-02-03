export const basketItem = {
    props: ['img', 'item'],
    emits: ['remove'],
    template:
    `<div class="basket_item">
        <div class="product_bio">
            <img :src="img" :alt="item.product_name">
            <div class="product_desc">
                <p class="product_title">{{ item.product_name }}</p>
                <p class="product_quantity">Кол-во: {{ item.quantity }}</p>
                <p class="product_single_price">$ {{ item.price }}</p>
            </div>
        </div>
            <div class="right_block">
                <p class="product_price">$ {{ item.quantity*item.price }}</p>
                <button class="del_btn" @click="$emit('remove', item)">Удалить</button>
            </div>
    </div>`
};