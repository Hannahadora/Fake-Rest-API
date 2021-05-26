<template>
  <div id="sign-up">
      <h1 class="text-center mb-5 text-white font-bold text-2xl">Welcome! Please Sign Up</h1>

      <form action="" id="signUpForm" class="" @submit.prevent="validatesignup">
          <div v-if="errmsg" class="text-red-500 text-xl font-serif"></div>

          <input id="form-input"
           type="text"
           v-model="signupinfo.fullname"
           placeholder="Full Name"
           >
          <input id="form-input"
           type="email"
           v-model="signupinfo.email"
           placeholder="E-mail"
           >
          <input id="form-input"
           type="phone"
           v-model="signupinfo.mobilenumber"
           placeholder="Phone Number"
           >
          <input id="form-input"
           type="address"
           v-model="signupinfo.address"
           placeholder="Address"
           >
          <!-- <input id="form-input"
           type="text"
           v-model="signupinfo.gender"
           placeholder="gender"
           > -->
           <select name="gender" v-model="signupinfo.gender" id="">
               <option value="" selected disabled>Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
           </select>
          <input id="form-input"
           type="password"
           v-model="signupinfo.password"
           placeholder="Password"
           >
          <input
           type="submit"
           value="Sign Up"
           >
      </form>
      
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
export default {
    name: 'SignUp',
    component: {

    },

    data () {
        return{
            signupinfo: {
                fullname: '',
                email: '',
                mobilenumber: '',
                address: '',
                gender: '',
                password: '',
                errmsg: ''
            }
        }
    },

    methods: {
        validatesignup() {
            fetch('http://localhost:3000/body', { 
                method: 'POST',
                mode: 'cors', 
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'},
                body: JSON.stringify(this.signupinfo)
            })
            .then((res) => res.json())
            // .then((json) => console.log(json))
            .then((data) => {
                console.log(data)
                alert('Sign Up successful')
            })
            .catch((err) => console.log(err))
        },

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:3000/body',
        //     data: {
        //         body:this.signupinfo
        //     }
        // });
    }
}

</script>

<style>
   
</style>