x<template>
  <div class="container-fluid">
          <app-nav  v-bind:categories="categories"></app-nav>
    <div class="row  p-5">
             
               <div class="col-lg-12 text-justify  text">
                <h1 class="heading  " style="font-size: 3rem;"> 
                  About Us
                </h1>
                <p>
                  Welcome to Fk Heart,  We’re dedicated to giving you the very best of Content, <i> All Type Of Poetry, 
Quotes and Many Other Contents,</i> and some according to your desired things with a focus on 
dependability and uniqueness. <br> <br>
Founded in 2021 by Fk Heart. When they first started out their passion, was helping out to Our Viewer’s
be more friendly, providing the best content/Poetry/Quotes for his fellow readers drove him to visit and 
make their days hilarious and gave him the impetus to turn hard work and inspiration into to a booming 
online fun. We now serve visitors all over the world and are thrilled to be a part of this global news 
network site. <br> <br>
<p> We hope you enjoy our content as much as we enjoy offering them to you.</p>
 If you have any questions or comments, please don’t hesitate to contact us. <br> <br>
Sincerely, <br>
Fk Heart Team
 
                <div class="text-center d-flex justify-content-around">
                  <span >
                      <a target="_blank" href="https://www.facebook.com/Fkpoetry143/" class="fa fa-facebook-official text-info contact" style="font-size: 20px;">    
                       Facebook </a> 
                  </span>
                  <span>
                      <a href="https://www.youtube.com/channel/UCrnxhyEJGeCNYfGDrWIe0tw"  class="fa fa-youtube-play text-danger contact" target="_blank"  style="font-size: 20px;" aria-hidden="true">
                        YouTube</a></span>
                  <span> 
                      <a href="https://www.instagram.com/Farooq_Khan22/" target="_blank" class="fa fa-instagram text-warning contact" style="font-size: 20px;" aria-hidden="true"> 
                          Instagram</a>
                  </span>
                
                  <span>   
                      <a href="+923369468293" class="fa fa-whatsapp  text-success contact" aria-hidden="true" style="font-size: 20px;" > 
                        +923369468293    
                      </a></span>
                </div>
              </div>


          </div>




  </div>
</template>

<script>
import nav from "../components/navbar/nav.vue";

export default {
  components: {
    "app-nav": nav,
  },
}
</script>
<style scoped>

    .bg{
       
   height: 600px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.heading{
 font-family:'Times New Roman', Times, serif ;
}
*{
  box-sizing: border-box;
}
.text{
  box-shadow:1px 1px 10px 1px rgb(175, 175, 175);
  padding: 10px;
  border-radius: 10px;
} 
@media only screen and (min-width: 600px) {
  .row {
     padding: 50px !important;
     margin-top: 50px !important;
     
}
}

@media only screen and (max-width: 600px) {
  .contact {
font-size: 13px  !important;
}
}



</style>
