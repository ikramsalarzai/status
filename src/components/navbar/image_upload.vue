<template>
    <div>
        <button class="log bgnav" onclick="document.getElementById('id03').style.display='block'" style="width:auto;"> <i class="fa fa-upload" aria-hidden="true"></i>  Upload Status </button>
        <div id="id03" class="modal">
            <form class="modal-content" >
                <span onclick="document.getElementById('id03').style.display='none'" class="close" title="Close Modal">&times;</span>
                <div class="container">
                    <h2>Update the status </h2>    
                <br>
                select category     
                <select
                v-model="selected"
                class="form-control "
                prefix="ios-search"
                placeholder="Select Company"
                >
 
                  <option  class=" text-right"
                      v-for="(item, index) in categories"
                      :key="index"
                      :label="item.name"
                      :value="item.id"
                  >{{ item.name }}
                  </option>
                </select>

                <textarea
                style=" "
                v-model="ucontent" placeholder="......یہاں پوسٹ کریں  " 
                class="form-control pre text-right">
                </textarea>
                 
                     <div class="clearfix">
                        <button type="submit" class="signupbtn" @click.prevent="onupload" onclick="document.getElementById('id03').style.display='none'" >upload</button>
                        <button type="button" onclick="document.getElementById('id03').style.display='none'" class="cancelbtn">Cancel</button>      
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
    props:['categories'],
    data() {
        return {
        selectedfile:null,
        uname:'',
        ucontent:'',
        previewImage: null,
        select_id:1,
        selected:'',   
        showw:true,
        showw1:true,
        u_id:null
         
        }
    },
methods: {
     method1(event){
        this.select_id=event.id
      },
      
    onfileselected(event){
          this.selectedfile = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(this.selectedfile);
          reader.onload = event =>{
          this.previewImage = event.target.result;
          console.log(this.previewImage)                       }
          },
        onupload(){
            const fd= new FormData()
            if(this.selectedfile!=null)
            fd.append('image',this.selectedfile,this.selectedfile.name)
            
            fd.append('content',this.ucontent)
            fd.append('user_id',this.u_id)
            // fd.append('category_id',this.selected)
            fd.append('category_id',this.selected)
            axios.post('https://dashboard.fkheart.com/api/status/',fd)
            .then(res=>{
                alert('Status Uploded Successfully. Will Show once admin Approve it.')
                console.log(res)
                this.$router.go(0);
                this.wantpost=false;
                this.uname=null;
                this.ucontent=null;
                this.previewImage=null;
             })
        },

    
    },
    created() {
      this.u_id=localStorage.getItem('user_id')

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
  z-index: 1; /* Sit on top */
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
textarea {
  
  height: 150px;
}

.bgnav{
background-color:#246676 !important;
color: rgba(211, 211, 211, 0.698);
}
.bgnav:hover{
color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
}


.fa-upload{
color: rgba(211, 211, 211, 0.698);
font-size: 17px;
}
.fa-upload:hover
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