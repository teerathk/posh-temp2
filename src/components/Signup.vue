<template>
  <div class="wrapper-signup">
    <!-- START: REGISTRATION SCREEN -->
    <section class="registration-screen" id="registration-dvs">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 py-5 bg-primary-posh-m text-white">
            <div class="bgp-card-bx">
              <div class="card-body">
                <p class="mb-1">Welcome To</p>
                <h2>Posh Marketplace</h2>
              </div>
              <div class="footer-copyright">
                <p>Copyright © 2021 Posh Market, Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div class="col-md-8 py-5 bg-white">
            <div class="registration-dvs-form text-center">
              <h3 class="pb-1 txt-blue">Create Account</h3>
              <p class="txt-gray regis-subtitle">
                Enter your details below to continue
              </p>
              <form ref="form" @submit.prevent="postData" method="POST">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      name="First Name"
                      placeholder="First Name*"
                      class="form-control"
                      type="text"
                      v-model="signup.first_name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      name="Last Name "
                      placeholder="Last Name*"
                      class="form-control"
                      type="text"
                      v-model="signup.last_name"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      placeholder="Email Address*"
                      class="form-control"
                      type="email"
                      v-model="signup.email"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <select
                      class="form-control select-custom-point"
                      v-model="signup.gender"
                    >
                      <option disabled :value="null">Gender*</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div class="form-group col-md-12">
                    <input
                      name="Address "
                      placeholder="Address*"
                      class="form-control"
                      type="text"
                      v-model="signup.u_address"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <select
                      class="form-control select-custom-point"
                      v-model="signup.u_state"
                    >
                    <option disabled :value="null">State*</option>
                      <option value="male">US</option>
                      <option value="female">UK</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      placeholder="City*"
                      class="form-control"
                      type="text"
                      v-model="signup.u_city"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      placeholder="Zip Code*"
                      class="form-control"
                      type="text"
                      v-model="signup.u_zip"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      placeholder="Phone Number*"
                      class="form-control"
                      type="tel"
                      v-model="signup.phone"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <input
                      placeholder="Password*"
                      class="form-control"
                      type="password"
                      v-model="signup.password"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      placeholder="Confirm Password*"
                      class="form-control"
                      type="password"
                      v-model="signup.password_confirmation"
                    />
                  </div>
                </div>

                <div class="form-row text-center sub-btn-bx">
                  <button type="submit" class="primary rsv-bx">
                    <strong>REGISTER</strong>
                  </button>
                  <p class="mt-3 mb-1">Already Have an account?</p>
                  <span class="link-b-b">
                    <router-link to="login"><strong>Sign-In</strong></router-link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END::  REGISTRATION SCREEN -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Signup",
  data() {
    return {
      signup: {
        first_name: null,
        last_name: null,
        gender: null,
        u_address: null,
        password: null,
        password_confirmation: null,
        u_state: null,
        u_city: null,
        phone: null,
        u_zip: null,
      },
    };
  },
  methods: {
    postData(e) {
      axios.post(axios.defaults.baseURL +"user",this.signup).then((result)=>{
        console.log(result.data);
        const obj = result.data;
        console.log(obj);
        if(obj.success==true){
          alert(obj.message);
          this.signup="";
        } else {
          alert("Some error occured");
        }
        console.log(result);
      })
      e.preventDefault();
    },
  },
};
</script>