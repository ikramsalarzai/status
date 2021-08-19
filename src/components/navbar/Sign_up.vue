<template>
  <div class="">
    <button class="log bgnav" onclick="document.getElementById('id02').style.display='block'" style="width:auto;"><i class="fa fa-user" aria-hidden="true"> Sign Up </i></button>
    <div id="id02" class="modal">
      <form class="modal-content" action="/action_page.php">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>

        <div class="container">
          <h2>Sign Up</h2>
          <p>Please fill in this form to create an account.</p>
          <hr>
    <!-- <div class="imgcontainer">
     <img :src="previewImage" alt="Avatar" class="avatar rounded-circle">
    <input type="file" accept="image/jpeg" @change="uploadImage" />     
    </div>       -->
  
      <label for="name"><b>Name</b></label>
      <input type="text" placeholder="Enter name" v-model="name" name="name" required>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" v-model="email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" v-model="psw" name="psw" required>

      <label for="psw_repeat"><b>Repeat Password</b></label>
      <input type="password" v-model="psw_repeat" placeholder="Repeat Password" name="psw_repeat" required>
      
      <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>
      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div class="clearfix">
       <button type="submit" class="signupbtn" @click.prevent="addpost"  >Sign Up</button>
        <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>      
      </div>
    </div>
  </form>
</div>

    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);


export default {
    data() {
        return {
            previewImage:null,
            name: '',
            email: '',
            psw:'',
            psw_repeat:'',
            response: '',
            success: '',            
        }
    },
methods:{
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
      this.previewImage = e.target.result;
      };
    }, 
 addpost(){
    axios.post('https://dashboard.fkheart.com/api/register', 
      {
        'name':this.name,
        'email':this.email,
        'password':this.psw,
        'c_password':this.psw_repeat  
        // 'name':id,
        // 'email':status,
        // 'jobtitle':job
      }, // the data to post
      { headers: {
        'Content-type': 'Application/json',
        }
      }).then(function(response){
        console.log(response)
      }).catch(function(err){
          console.log(err)
      });        
     }, 
}
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #556cf0;
  border-radius: 10px;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #9da0a598;
  padding-top: 50px;
  
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: -3% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 50px;
  font-weight: bold;
  color: #ff0000;
}

.close:hover,
.close:focus {
  color: #020202;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 600px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
.imgcontainer {
  text-align: center;
  margin: 20px 0 12px 0;
  position: relative;
}

img.avatar {
width: 40%;
border: 1px solid black;
}
.log{
    width: 40px;
    height:20px;
    font-size: 15px;
    padding: 0px;
    background-color: whitesmoke;
    color: black;
    border: none;
  
}
.signupbtn:hover{
  box-shadow: none;
}
.signupbtn{
  box-shadow: 1px 1px 10px 5px rgb(165, 165, 165);
  border-radius: 10px;
}

.bgnav{
background-color:#246676 !important;
}
 
.fa-user{
color: rgba(211, 211, 211, 0.698);
font-size: 17px;
}
.fa-user:hover
{
color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
}


@media only screen and (max-width: 600px) {
   .modal-content {
    width: 90% !important;
    z-index: 100 !important;
  }
}

</style>