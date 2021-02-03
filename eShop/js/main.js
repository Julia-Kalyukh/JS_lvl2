import {Products} from './products.js';
import {basket} from './basket.js';
import {search} from './search.js';

const Shop = {
    components: {
        Products,
        basket,
        search
    },
    data() {
        return {
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error));
        },
    },
};

Vue.createApp(Shop).mount('#block');