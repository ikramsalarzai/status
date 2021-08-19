<template>
  <div class="container">
    <div class="row">
      

      <div class="col-lg-12 col-sm-12   pt-4">
        <div class="slider d-block d-sm-none">
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


        <button v-if="infos == ''" class="btn btn-primary loading" disabled>
          <span class="spinner-grow spinner-grow-sm"></span>
          Loading..
        </button>
        
        <div
          class="small_screen_card"
          v-for="(user, id) in infos.data"
          :key="'A' + id"
        >
          <div class="card mb-2 " v-if="user.image != null">
            <div class="card-body">
              <span>
                <h5 class="card-title text-capitalize">
                  <img
                    class="user_image"
                    :src="'https://dashboard.fkheart.com/' + user.user_image"
                    alt="user pic"
                  />
                  {{ user.name }}
                </h5>
              </span>
              <!-- <article class="card-text   pb-4 p-2" > {{user.content}} </article> -->

              <img
                class="card-img-top mb-2 img-fluid"
                :src="'https://dashboard.fkheart.com/' + user.image"
                width="200px"
                height="120px"
              />
              <br />
              <span class="d-flex justify-content-around">
               <div>
                  <ShareNetwork
              network="whatsapp"
              url="https://www.fkheart.com/ "
              :title="user.content"
                >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Share it on WhatsApp!"
                      ><i class="fa fa-share-alt" aria-hidden="true"></i
                    ></a>
                    <div class="tooltip bs-tooltip-top" role="tooltip">
                      <div class="arrow"></div>
                      <div class="tooltip-inner ">
                      </div>
                    </div>
                  </ShareNetwork>
                </div>
                
                <div>
                 
                <!-- <a
                      href="#"
                      data-toggle="tooltip"
                      title="Add to favourite!"
                      >
                  <i   
                   id="heart"
                   @click="heart(user.id)"
                  class="fa fa-heart" aria-hidden="true"
                >
                </i>     
                      </a> -->
                    <div class="tooltip bs-tooltip-top" role="tooltip">
                      <div class="arrow"></div>
                      <div class="tooltip-inner ">
                      </div>
                    </div>

                </div>
                
                <div>
                  <a href="#" data-toggle="tooltip" title="Copy it!">
                  <i
                    @click="myFunction(user.content)"
                    id="clip"
                    class="fa fa-clipboard"
                    aria-hidden="true"
                  >
                  </i>
                </a>
                <div class="tooltip bs-tooltip-top" role="tooltip">
                  <div class="arrow"></div>
                  <div class="tooltip-inner ">
                    Copy it
                  </div>
                </div>
                </div>
              </span>
            </div>
          </div>

          <div v-else class="card mb-2 ">
            <div class="card-body ">
              <span>
                <h5 class="card-title text-capitalize">
                  <img
                    class=" user_image"
                    :src="'https://dashboard.fkheart.com/' + user.user_image"
                    alt="user pic"
                  />
                  {{ user.name }}
                </h5></span
              >
              <article
                id="cont1"
                class="card-text  bg-light contentcard text-right pb-4 p-2" style="white-space: pre-line"
              >
                {{ user.content }}
              </article>
              <br />
              <span class="d-flex justify-content-around">
               <div>
                  <ShareNetwork
              network="whatsapp"
              url="https://www.fkheart.com/ "
              :title="user.content"
                >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title="Share it on WhatsApp!"
                      ><i class="fa fa-share-alt" aria-hidden="true"></i
                    ></a>
                    <div class="tooltip bs-tooltip-top" role="tooltip">
                      <div class="arrow"></div>
                      <div class="tooltip-inner ">
                      </div>
                    </div>
                  </ShareNetwork>
                </div>
                
                <div>
                 
                <!-- <a
                      href="#"
                      data-toggle="tooltip"
                      title="Add to favourite!"
                      >
                  <i   
                  
                   @click="heart(user.id)"
                  class="fa fa-heart-o"
                  aria-hidden="true"
                >
                </i>     
                      </a> -->
                    <div class="tooltip bs-tooltip-top" role="tooltip">
                      <div class="arrow"></div>
                      <div class="tooltip-inner ">
                      </div>
                    </div>

                </div>
                
                <div>
                  <a href="#" data-toggle="tooltip" title="Copy it!">
                  <i
                    @click="myFunction(user.content)"
                    id="clip"
                    class="fa fa-clipboard"
                    aria-hidden="true"
                  >
                  </i>
                </a>
                <div class="tooltip bs-tooltip-top" role="tooltip">
                  <div class="arrow"></div>
                  <div class="tooltip-inner ">
                    Copy it
                  </div>
                </div>
                </div>
              </span>
            </div>
          </div>
        </div>
          
        <div class="card mb-2 mt-4 center" v-if="infos.data!=undefined && infos.data.length == 0">
          <div><h3 class="bg-info">No Data Uploaded Yet !!!</h3></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
import Clipboard from "v-clipboard";
Vue.use(Clipboard);

import VueSocialSharing from "vue-social-sharing";

Vue.use(VueSocialSharing);

export default {
  props: ["infos", "selectid"],
  components: {},
  data() {
    return {
    
      url: "https://dashboard.fkheart.com/api/status/",
     
      categories: "",
      selectedfile: null,
      uname: "",
      ucontent: "",
      previewImage: null,
      select_id: 1,
      selected: "",
      wantpost: false,
      name_: "Do you want to upload a post",
      showw: true,
      showw1: true,
      tokencheck: null,
      tokenvalue:null,
      slides:null
    };
  },
  methods: {
    myFunction(content) {
      var copyText = content;
      this.$clipboard(copyText);
      alert("copied");
    },
    myFunction1(content) {
      var copyText = content;
      this.$clipboard("http://dashboard.fkheart.com/" + copyText);
      alert("copied");
    },

    heart(id){
      console.log(id)
      if (this.tokenvalue!=null)
      {   
        axios.post('https://dashboard.fkheart.com/api/add/favourite/1', {
          'status_id': id
        },{ headers: {"Authorization" : `Bearer ${this.tokenvalue}`} })
        .then(resp=>(
          console.log(resp)   
     ))
     .catch((err) => {
         console.log(err)    
        });
        
      }
      else{
        alert('Log in to add it to your favorite')
      }
    },
    
  

  
  },

   created(){
    this.tokenvalue=localStorage.getItem('token');
       axios
      .get("https://dashboard.fkheart.com/api/slider")
      .then((response) => (this.slides = response));
   }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.loader {
  border: 6px solid #f3f3f3;
  border-radius: 100px;
  border-top: 5px solid #3498db;
  width: 120px;
  margin-top: 80px;
  margin-left: 150px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  margin: auto 150px;
}

.contentcard {
  height: auto;
}
.contentcard:hover {
  direction: rtl;
}
.user_image {
  width: 50px;
  height: 50px;
  border-radius: 60px;
}

article {
  font-family: "Noto Naskh Arabic", serif;
  font-size: 1.5em;
  direction: rtl;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 100% !important;
  }
}
@media only screen and (max-width: 600px) {
  .small_screen_card {
    margin: 0px -20px;
  }
}
#clip:hover {
  cursor: pointer;
  font-size: 20px;
}
#heart:hover{
  cursor: pointer;
  
}

.slider{
  margin: -50px  -20px 15px -20px !important;
padding: 0px;
 
 

}
</style>
