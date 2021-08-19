<template>
<nav class="navbar bgbar navbar-expand-lg navbar-dark bg-light   ">
    <router-link to="/" class="navbar-brand" href="#"  ><img src="@/assets/logo2.png" alt="logo" class="logo">  <b> Status Collection</b></router-link>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li class="nav-item  home-bar">
                <router-link to="/"    class="nav-link "  ><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only"></span></router-link>
            </li>
            <li class="nav-item  " >
                <router-link to="video" class="nav-link" > <i class="fa fa-video-camera" aria-hidden="true"></i> Video</router-link>
            </li>
            <li class="nav-item">
                <router-link to="aboutus" class="nav-link"> <i class="fa fa-users" aria-hidden="true"></i> About Us</router-link>
            </li>
            <li class="nav-item">
                <router-link to="contactus"   class="nav-link" href="#"> <i class="fa fa-phone" aria-hidden="true"></i> Contact us</router-link>
            </li>
            <li class="nav-item">
                <router-link to="privacy"   class="nav-link" href="#"> <i class="fa fa-book" aria-hidden="true"></i> Privacy Policy</router-link>
            </li>
            <li>
                <div class="dropdown d-none d-block d-sm-none">
                    <router-link to="/" class="btn dropdown-toggle text-mute" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                                Categories
                    </router-link>
                    <div class="dropdown-menu" aria-labelledby="triggerId">
                        <ul class="dropdown-item"     v-for="item in categories" :key="item.id">
                        <li @click.prevent="handClick(item.id)"> {{item.name}} </li></ul>
                     </div>
                </div>
            </li>  
             <!-- <li class="nav-item">
                <a class="nav-link" href="#"> <i class="fa fa-bell " aria-hidden="true"></i></a>
            </li>  -->
            <li class="nav-item ">
                <app-register v-if="tokenvalue==null"  class="nav-link" href="#"></app-register>
            </li>
            <li class="nav-item" >
                <app-signup v-if="tokenvalue==null" href="" class="nav-link"></app-signup>
             </li>
            
            <li class="nav-item"  >
                 <app-image v-if="tokenvalue!=null"  :categories='categories'  class="nav-link"></app-image>
            </li>            
            
             <li class="nav-item"  >
                 <app-logout v-if="tokenvalue!=null"  class="nav-link"></app-logout>
             </li>
            
        </ul>
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Enter Search term"> 
            <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> -->
        </form>
    </div>
</nav>

</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(VueAxios,axios)

import register from './register.vue'
import Sign_up from './Sign_up.vue'
import logout from './logout.vue'
import image_upload from './image_upload.vue'


export default {
components:{
    "app-register":register,
    "app-signup":Sign_up,
    "app-logout":logout,
    "app-image" :image_upload

},  
   props: [],

data() {
    return {
        categories:'',
        tokenvalue:null,
        click_id:10,

      }
   },

created(){
     this.tokenvalue=localStorage.getItem('token')
     
},

    methods: {
        handClick(id) {  
            this.click_id=id
            console.log(this.click_id)
            this.$emit('clickd',this.click_id)}
    },

    mounted() {
    axios
    .get('https://dashboard.fkheart.com/api/category/')
    .then(response => (this.categories=response.data))
    },


}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-bar{
margin-left: 10px; 
}

@media only screen and (min-width: 600px) {
  .navbar {
     margin-left: -15px    ;
  }
}
/* @media only screen and (max-width: 600px) {
  .navbar {
     margin: 0px 5px   ;
  }
} */

@media only screen and (max-width: 600px) {
  li:hover {
   background-color: aqua;
   }
}


.nav-link  {
    color:red
}

nav{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
}
.logo{
    width: 40px;
    height: 40px;
}
@media only screen and (max-width: 600px) {
  nav {
      z-index: 1;
      position: relative;

 }
}
.bgbar{
    background-color:#246676 !important;
}
.text-mute{
color: rgba(211, 211, 211, 0.698);
}
.text-mute:hover{
color: rgba(0, 0, 0, 0.698);
background-color: #246676 !important;
}

.dropdown:hover{

color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
}

.nav-link:hover  {
color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
 }


a.nav-link.router-link-exact-active.router-link-active{
    color:white;
}

</style>