<template>
  
  <div class="container mt-5 " >
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

     <!-- <div class="Title-top d-flex justify-content-between mb-5">
        <p class="h4">Daftar Pengguna</p>
        <b-button variant="primary">Buat Pengguna</b-button>
      </div> -->
  <p class="h4 mb-5">Add User</p>

  <b-card class="mb-2 p-3"  style="max-width: 80rem;"  >

      <form ref="form" v-on:submit.prevent="handleSubmit" >
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          
        >
          <b-form-input
            id="name-input"
            v-model="form.name"
            placeholder="Enter The Name"
            required
          ></b-form-input> 
        </b-form-group>
        
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
          class="mt-3"
        >
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
             placeholder="Enter The Email"
            required
          ></b-form-input> 
        </b-form-group>
        
         <b-form-group
          label="Gender"
          label-for="gender-input"
          invalid-feedback="Gender is required"
          class="mt-3"
        >
        <b-form-select
          v-model="form.gender"
          :options="gender"
          value-field="value"
          disabled-field="notEnabled"
          class="form-control"
        ></b-form-select>
        </b-form-group>
        
        <b-form-group
          label="Status"
          label-for="status-input"
          invalid-feedback="Status is required"
          class="mt-3"
        >
        <b-form-select
          v-model="form.status"
          :options="status"
          
          disabled-field="notEnabled"
          class="form-control"
        ></b-form-select>
        </b-form-group>
      </form>

      <div class="button d-flex justify-content-between mb-5 mt-5" >
        <router-link :to="{name:'home'}">
        <b-button variant="danger"> Back</b-button>
        </router-link>
        <b-button variant="primary" @click="handleSubmit">Save</b-button>
      </div>
  </b-card>
  
  </div>
</template>

<script>
import axios from 'axios';

export default {
     data() {
      return {
        form:{
          name: '',
          email: '',
          gender: null,
          status: null,


        },
        gender: [
          { value: null, text: 'Please select an option' },
          'male', 'female',
        ],

        status:[
          { value: null, text:'Please Select an option'},
         'active','inactive',
        ]
     
        
      }
    
    },

    methods:{

      
      
      handleSubmit(e){
        e.preventDefault();

        // console.log('submited',this.form)

       
        axios.post(' https://gorest.co.in/public/v2/users?access-token=08b816f010a788aa024c36f8552a110c16aad446ec0ecc81cc9d6479c71ce69d',this.form,{
          
        })
              .then((response) => {
                console.log(response);

                if(response === 200 || 201 ){

                this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                text: 'User has been saved',
              });
                  this.$router.push('/');                  
                }
              })

              .catch((error) => {
                error.response;
                
                this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'error',
                text: 'User has been not saved ',
              });

              })
      },
    }

}
</script>

<style>

</style>