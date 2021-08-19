<template>
  <div class="container d-none d-sm-block d-md-block">
    <div class="row mt-1">
      <div class="card ">
        <div id="carouselExampleControls" class="carousel carousel-fade slide" data-ride="carousel" 
           data-interval="5000"
        >
          <div class="carousel-inner" style=" border-radius:10px">
         
            <div class="carousel-item"    v-for="(item,id) in slides.data" :key="id" :class="{ active: id==0 }">
              <img class="d-block w-100 c_image" :src="'https://dashboard.fkheart.com/' +item.image" 
              alt="first slide">
            </div>
         
        </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
        </div>
      </div>

      <div class="card mt-2">
        <div class="card-body">
          <h5
            class="card-title font-weight-bold text-right"
            style="color:#246676"
          >
            آج کے منتخب شعر
          </h5>
          <p class="text-right">دکھ اداسی ملال غم کے سوا</p>
          <p class="text-right">اور بھی ہے کوئی مکان میں کیا</p>
        </div>
      </div>
      <div class="card mt-2">
        <div class="card-body">
          <h5 class="card-title  font-weight-bold" style="color:#246676">
            Our Youtube Channels
          </h5>
          <div class="">
          <a
            href="https://www.youtube.com/channel/UCkIUZOJXENvnb0H1xfgp00g/featured"
            target="_blank"
          >
            <img src="@/assets/t.jpg"  alt="" class="ml-n2 py-1 youtube" >
            <span class="btn btn-outline border" style="width:184px;margin-left:1px">Technical Farooq Khan </span>
          </a>
          <br >
          <a
            href="https://www.youtube.com/channel/UCQbnhbwZhM2jjnhJhR0Zs-w"
            target="_blank"
          >
            <img src="@/assets/t1.jpg" alt="" class="py-1 ml-n2 youtube" >
            <span class="btn btn-outline border "  style="width:183px;margin-left:3px">
               Fk Quotes Collection
            </span>
          </a>
          <br >
          <a
            href="https://www.youtube.com/channel/UCrnxhyEJGeCNYfGDrWIe0tw"
            target="_blank"
          >
            <img src="@/assets/t2.jpg" alt="" class="py-1 ml-n2 youtube" />
            <span class="btn btn-outline border"  style="width:183px;;margin-left:3px"
              >Fk Poetry Collection
            </span>
          </a>
          </div>
        </div>
      </div>
      <div class="card mt-2 p-3">
        <h5 class="card-title mt-2  font-weight-bold" style="color:#246676">
          Recent Videos
        </h5>
        <span v-for="item in video_object.slice(0, 3)" :key="item.id">
          <a :href="item.url" target="_blank">
            <img src="@/assets/t.jpg" alt="" class="py-1 youtube" />
            <span class="pl-2"> New video </span>
          </a>
        </span>
      </div>
      <!-- <div
        class="mt-2 col-lg-12 col-sm-12 politics p-3 cursor"
        style="border-radius:10px"
      >
        <h5 style="color:#246676">Famous Poets</h5>
        <img class="py-2 poet " src="@/assets/faraz.jpg" alt="" />
        <span class="ml-2"> Ahmad Faraz </span>
        <br />
        <img class="py-2 poet" src="@/assets/iqbal.jpg" alt="" />
        <span class="ml-2"> Allama M Iqbal</span>
        <br />
        <img class="py-2 poet" src="@/assets/faiz.jpg" alt="" />
        <span class="ml-2"> Faiz Ahmad Faiz </span>
      </div> -->
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["infos"],
  data() {
    return {
      posts: [],
      vids: [],
      video_id: [],
      video_url: null,
      video_object: [],
      slides:null
    };
  },

  methods: {},
  created() {
    axios
      .get("https://dashboard.fkheart.com/api/videos")
      .then((resp) => (this.video_object = resp.data));

      axios
      .get("https://dashboard.fkheart.com/api/slider")
      .then((response) => (this.slides = response));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 2px rgb(238, 238, 238);
  width: 100%;
}
.card p {
  font-size: 15px;
}
.container {
  position: fixed;
  width: 280px;
  overflow-y: scroll;
  height: 570px;
  padding: 20px;
}
.politics {
  box-shadow: 0px 5px 10px 3px rgb(235, 234, 234);
}
::-webkit-scrollbar {
  display: none;
}
.poet {
  width: 50px;
  height: 65px;
  border-radius: 100%;
}

.youtube {
  width: 50px;
  height: 60px;
  border-radius: 100%;
}
a {
  text-decoration: none;
}

p {
  font-family: "Noto Naskh Arabic", serif;
}
.cursor {
  cursor: pointer;
}
.c_image {
  height: 150px;
}
.carousel-item {
  transition:3s ease-in-out;
}
.btn-outline{
   color:  #246676;;
}
.btn-outline:hover{
   background-color:  #246676;
   color:  #ffffff;;
}
</style>
