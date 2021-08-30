<template>
  <div class="container-fluid">
    <app-nav @clickd="handClick" v-bind:categories="categories"></app-nav>

    <div class="row mt-5"  >
      <div class="col-lg-12 mt-4">
        <div class="embed-responsive embed-responsive-21by9 mt-2">
          <iframe
            class="embed-responsive-item"
            :src="
              'https://www.youtube.com/embed/' +
                full_video +
                '?autoplay=1&mute=1'
            "
            allowfullscreen
            allow="autoplay, muted"
          ></iframe>
        </div>
      </div>
      <div class="container" style="position:relative;top:0">
        <div class="row">
          <div class="col-lg-3 mt-5" v-for="item in vids" :key="item.id">
            <div class="card" >
            
              <img
                class="image"
                :src="item.thumbnail_url"
                alt=""
                height="150px"
              />
              <div class="middle" @click.prevent="newurl(item.html)">
                 <div class="text">
                   <i class="fa fa-play " aria-hidden="true" style="font-size:40px" ></i>
                    </div>
              </div>
              <div class="card-body text-left bg-light">
                <h6 class="card-title">{{ item.title }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import nav from "../components/navbar/nav.vue";

export default {
  name: "App",

  components: {
    "app-nav": nav,
  },
  data() {
    return {
       
      video_html: null,
      vids: [],
      video_id: [],
      video_url: null,
      full_video: "MjOUd9Nrt3Q",
    };
  },

  created() {
    axios.get("https://dashboard.fkheart.com/api/videos").then((resp) => {
      var videourl = null;
      videourl = resp.data;
      this.video_url = videourl;
      for (let index = 0; index < videourl.length; index++) {
        let videdetail = null;
        videdetail =
          "https://www.youtube.com/oembed?url=" +
          videourl[index].url +
          "&format=json";
        axios.get(videdetail).then((Response) => {
          var video_detail = {};
          video_detail = Response.data;
          this.vids.push(video_detail);
        });
      }
    });
  },
  
  methods: {
    newurl(id) {
      this.full_video = id;
      var stepOne = id.split("?")[0];
      var stepTwo = stepOne.split("/");
      this.full_video = stepTwo[stepTwo.length - 1];
      

      //  document.documentElement.scrollTop = 0; //this is to go to top
    },

    handClick(id) {
      this.click_id = id;
      this.info = "";
      var full__url = this.url + this.click_id;
      axios.get(full__url).then((res) => {
        this.info = res.data;
      });
    },
  },

  mounted() {
  



  },
};
</script>

<style scoped>
.card {
  text-align: center;
  box-shadow: 1px 4px 80px 2px rgb(136, 136, 136);
}

a {
  text-decoration: none;
  color: white;
}

@media only screen and (max-width: 600px) {
  img {
    height: 300px !important;
  
  }
}

.image:hover {
  opacity: 0.4;

}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.text {
  /* background-color: #b2beba; */
  color: white;
  padding: 16px 32px;
  cursor: pointer;
}

.middle:hover {
  opacity: 1;
}

</style>
