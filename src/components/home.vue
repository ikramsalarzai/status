<template>
<div class="container-fluid">
    <app-nav  @clickd="handClick" v-bind:categories="categories"></app-nav> 
      <div class="row row1 mt-5 pl-4" >
    
        <div class="col-lg-3  ">
          <app-left  @clicked="handleClick" :infos="info"></app-left>
        </div>

        <div class="col-lg-6 col-sm-12 ml-n3">
          <app-main :infos="info"  :selectid='clicked_id'>
          </app-main>
        </div>

        <div class="col-lg-3  ">
            <app-rightside :infos="info" ></app-rightside>
        </div>
  </div>
</div>
</template>

<script>

import leftside from './sides/leftside.vue'
import rightside from './sides/rightside.vue'
import main from './sides/main.vue'
import nav from './navbar/nav.vue'
 

import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
 components: {
     'app-left':leftside,
     'app-rightside':rightside,
     'app-main':main,
     'app-nav':nav,
      
   },
   data() {
     return {
        categories:[],
        status:null,
        theid:'',
        info:[],
        clicked_id:'',
        click_id:'',
        url:'https://dashboard.fkheart.com/api/status/',       
     }
   },
 
   methods: {
      
    liked() {
      return this.like+=1
    },

    handleClick(id) {
    
       this.clicked_id = id;
       this.info = "";
 
    axios
      .get(this.url + this.clicked_id)
      .then(resp=> 
      {
        this.info=resp.data
      });
      
    },
    
//method for nav categories

    handClick(id) {
      this.click_id = id;
      this.info = "";
      var full__url = this.url+this.click_id;
      axios.get(full__url)
      .then(res => {this.info = res.data});
    },
    
      
   },
    mounted() {
    
 axios.get(this.url)
    .then((resp) => (this.info = resp.data)); 
     
},


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c_image{
  height: 180px;

}
</style>
