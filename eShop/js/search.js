export const search = {
    data() {
        return {
            search: '',
        }
    },
    template: `
        <form action="#" class="search_form" @submit.prevent="">
            <input type="text" class="search_field" v-model.lazy="search">
                <button class="btn_search" type="submit">
                    <i class="fas fa_search"></i>
                </button>
        </form>`
};