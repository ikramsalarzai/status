<template>
    <div class="mt-n0">
    
<button class="logg bgnav "  onclick="document.getElementById('id01').style.display='block'"  >  <i class="fa fa-sign-in" aria-hidden="true"> Login </i>  </button>

<div id="id01" class="modal">
  <form class="modal-content animate"   >
      <button  type="button" onclick="document.getElementById('id01').style.display='none'" class="close d-none d-sm-block">&times;</button>
      <h4 class="p-2">Log In</h4>
      <p class="pl-3">Please fill the form </p>
      <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" v-model="uname" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" v-model="psw" required>
        
      <button class="bnt" @click.prevent="addpost" type="submit" onclick="" >Login</button>
      <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button   type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
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
        uname:'',
        psw:'',
 
         }
    },
  methods: {


    addpost(){  
      axios.post('https://dashboard.fkheart.com/api/login', 
        {
          'email':this.uname,
          'password':this.psw,
          
        },
        { mode: 'no-cors' },
        { headers: {
          'Content-type': 'Application/json',
 
         }
        }).then(function(response){
          localStorage.setItem('token',response.data.data.token) 
          localStorage.setItem('username',response.data.data.data.name)
          localStorage.setItem('user_profile',response.data.data.data.profile)
          localStorage.setItem('user_id',response.data.data.data.id)
          document.getElementById('id01').style.display='none'
          window.location.reload();

        }).catch(function(err){
          alert("Sorry incorrect username or password")
            console.log(err)
        }); 

      //localStorage.setItem("token",response.data.data.token );
    },     
  },
//   created(){
//      localStorage.setItem('username',this.uname)

// },
}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
.bnt{
  box-shadow: 1px 1px 5px 1px  rgb(53, 53, 53);
  color: rgb(0, 0, 0);
  padding: 14px 20px;
  margin: 8px 0;
  font-weight: 500;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;

}

.logg{
    padding: 0px 10px !important;
    margin: 0px 0px 0px 0px !important;
    background-color:rgb(248, 248, 248) !important;
    color:black !important;
    border: none;
}
button:hover {
  opacity: 0.8;
}
.bnt:hover{
   box-shadow: none;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  border: none;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
 
 

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: #00000066; /* Black w/ opacity */
  padding-top: 30px;
 
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 40%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 30px !important; 
  top: 0px !important;
  z-index: 1;
  background-color: white !important;
  width: 10px !important;
  height: 10px;
  color: #000 !important;
  font-size: 35px !important;
  font-weight: bold !important;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
.log{
    width: 40px;
    height:20px;
    font-size: 15px;
    padding: 0px;
    background-color: whitesmoke;
    color: black;
 
}
.bgnav{
background-color:#246676 !important;
}
.fa-sign-in{
color: rgba(211, 211, 211, 0.698);
font-size: 17px;
}
.fa-sign-in:hover
{
color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
}


</style>