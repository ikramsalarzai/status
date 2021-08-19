import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(VueAxios,axios)

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        categories:null,
    },

    mounted() {
        axios
        .get(this.category_url)
        .then(response => (this.categories=response.data))  
    },


})