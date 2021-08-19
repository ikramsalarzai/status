<template>
  <div class="container-fluid">
          <app-nav  v-bind:categories="categories"></app-nav>

    <div class="row row1   " >
      <div class="col-lg-6 row2" id="form_container">
        <h2>Contact Us</h2>
        <p> Please send your message below. We will get back to you at the earliest! </p>
         <img src="@/assets/contact.jpg" width="100%" alt="" srcset="">
        
      </div>
      <div class="col-lg-6 ">
        <div class="row mt-2 p-2">


          <div class="col-lg-12 card1 p-3">

            <p> Send us a message via WhatsApp</p>
            <i class="icon fa fa-whatsapp text-success " aria-hidden="true"></i>
            <span class="" style=" font-size: 18px;color: black  !important;">
              <a href="tel:+923369468293">
                +923369468293 </a></span>
          </div>

          <div class="col-lg-12 card1 p-3 my-2">
            <p> Mail Us</p>
            <i class="icon fa fa-envelope text-danger" aria-hidden="true"></i>
            <span style=" font-size: 18px !important;">
              <a href="mailto:farooq6635@gmail.com">
                farooq6635@gmail.com </a></span>
          </div>

          <div class="col-lg-12 card1 p-3">
            <p> Follow us on Facebook</p>
            <i class="icon fa fa-facebook text-primary" aria-hidden="true"></i>
            <span style=" font-size: 18px !important;color: black  !important">
              <a href="https://www.facebook.com/Fkpoetry143/">
                Fk Poetry Collection </a></span>
          </div>

          <div class="col-lg-12 card1 p-3 my-2">
            <p>Visit your Youtube channel </p>
            <i class="icon fa fa-youtube text-warning" aria-hidden="true"></i>
            <span style=" font-size: 18px !important;color: black  !important">
              <a href="https://www.youtube.com/channel/UCrnxhyEJGeCNYfGDrWIe0tw">
                Fk Poetry Collection & Fk Quotes Collection </a>
            </span>
          </div>
          <div class="col-lg-12 card1 p-3">
            <p>Follow us on Instagram for more content</p>
            <i class="icon fa fa-instagram text-info" aria-hidden="true"></i>
            <span style=" font-size: 18px !important;color: black  !important">
              Farooq_Khan22
            </span>
          </div>


          <div class="col-lg-3">
            <i class="" style="font-size: 25px;" aria-hidden="true">
              <span style=" font-size: 18px !important;color: black  !important;;">
              </span>
            </i>
          </div>
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
  .card1 {
    box-shadow: 1px 1px 10px 1px rgb(216, 216, 216);
    border-radius: 7px;
  }

  .icon {
    /* position: absolute;
  top: -20px;
  left: 45%; */
    font-size: 50px;
  }
    
#form_container
{
	padding:15px 15px;
	margin-top:15px;
	background: rgba(0,0,0,0.5);	
	color:#fff;
}

.upload-btn-wrapper 
{
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.upload-btn-wrapper input[type=file] 
{
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

@media only screen and (min-width: 600px) {
  .row1 {
      margin-top: 32px;
    padding: 30px;
}
}


</style>