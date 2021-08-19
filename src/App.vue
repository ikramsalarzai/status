<template>
  <div>
    <!-- <app-nav @clickd="handClick" v-bind:categories="categories"></app-nav> -->
    <router-view></router-view>   
</div>

</template>

<script>
  // import nav from './components/navbar/nav.vue'
//import home1 from './components/home1.vue'
//import leftside from './components/leftside.vue'


export default {
  name: 'App',
  components: {
      // 'app-nav':nav,
  //  'app-home1' :home1,
    //'app-left':leftside,
   },
   data() {
     return {
      
     }
   },
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
