<template>
<div class="container d-none d-lg-block d-md-none
  mt-1">
    <div class="row">
        <div id="user" v-show="tokenvalue!=null"  class="col-lg-12 upper my-2 p-4">
            <img class=" user_image" :src="'https://dashboard.fkheart.com/' + user_profile"   alt="user pic" > 
             <h5 class="text-capitalize pt-2">{{user_name}} </h5>
        </div>

        <div class="col-lg-12 lower">
            <h4 style="color:#246676">Category</h4>
            <i v-if="categories==''" class="spinner-border" aria-hidden="true"></i>
            <ul class="" v-for="item in categories" :key="item.id">
                <li
                 @click.prevent
                ="handleClick(item.id)" 
                class="font-weight-bold active ">
                <img class="ml-n3" :src="'https://dashboard.fkheart.com/' + item.image" width="50px" height="50px" style="border-radius:40px" alt="">     
               <span class="ml-3"> {{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios';
 
Vue.use(VueAxios,axios)

export default {
      props:['infos'],

     data() {
        return {
            tokenvalue:null,
            categories:'',
            clicked_id:null,
            user_name:'khan',
            user_profile:'',
             
        }
    },
    methods: {
        handleClick(id) {  
         this.clicked_id=id;
         const $ = require('jquery');
        // We declare it globally
        window.$ = $;
        
        $('ul').on('click',function(){
        $(this).addClass("current").siblings().removeClass("current");
        });
        this.$emit('clicked',this.clicked_id)}
    },

    mounted() {
    axios
    .get('https://dashboard.fkheart.com/api/category/')
    .then(response => (this.categories=response.data))
    },

    created(){
    this.tokenvalue=localStorage.getItem('token')
    this.user_name=localStorage.getItem('username')
    this.user_profile= localStorage.getItem('user_profile')
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upper{
    border-radius: 7px;
    padding: 10px;
     box-shadow: 1px 1px 10px 1px rgb(214, 214, 214);
}
.lower{
    border-radius: 7px;
    padding: 20px;
    box-shadow: 1px 1px 10px 1px rgb(226, 226, 226);

}
.lower ul{
    list-style-type: none;
}

.container{
    position: fixed;
    height: 550px;
    width: 280px;
    padding: 20px;
    overflow-y: scroll;
    
}
::-webkit-scrollbar {
    display: none;
}

.spinner-border{
    margin:20px 0px 20px 80px
}

.user_image{
width: 50px;
height: 50px;
border-radius: 60px;
}

li{
    cursor: pointer;
 
}
ul:hover {

    background-color: #246676;
    color: white;
}
 
ul.active {
  font-weight:bolder !important;
}
.current {
            color: #fff;
            background: #246676;
        }

</style>