<template>
    <div v-show="this.tokenn==null">
     <button   class="logg bgnav" @click="logout"><i class="fa fa-sign-out" aria-hidden="true"> Logout </i> </button>
    </div>
</template>
<script>
export default {
    methods: {
        logout(){
            this.tokenn =  localStorage.removeItem('token')
            localStorage.removeItem('username')
            alert("Log out successfully")
            window.location.reload();

        },

        data() {
            return {
              tokenn:null,
              }
        },
    

}
}
</script>
<style scoped>


.logg{
    padding: 0px 10px !important;
    margin: 0px 0px 0px 0px !important;
    background-color:rgb(248, 248, 248) !important;
    color:black !important;
    border: none;
}

.bgnav{
background-color:#246676 !important;
color: rgba(211, 211, 211, 0.698);

}
.fa-sign-out{
color: rgba(211, 211, 211, 0.698);
font-size: 17px;
}
.fa-sign-out:hover
{
color:rgb(0, 0, 0) !important;
background-color: #246676 !important;
}



</style>