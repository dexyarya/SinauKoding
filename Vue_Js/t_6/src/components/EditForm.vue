<template>
  <div class="container mt-5 " >
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

     <!-- <div class="Title-top d-flex justify-content-between mb-5">
        <p class="h4">Daftar Pengguna</p>
        <b-button variant="primary">Buat Pengguna</b-button>
      </div> -->
  <div class="container mt-5 ">
  <p class="h4 mb-5">Edit Data</p>

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
            placeholder="Name"
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
        <b-button variant="primary" @click="handleUpdate">Update</b-button>
      </div>
  </b-card>
    </div>
     
  </div>
</template>

<script>
import axios from 'axios';
export default {
     data() {
      return {

        editItem:{},

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

   async created(){
    const id = this.$route.params.id;
    const result = await axios.get(`https://gorest.co.in/public/v2/users/${id}`);
    this.editItem = await(await result).data;
    console.log(this.editItem);
    this.form.name = await(await result).data.name;
    this.form.email = await(await result).data.email;
    this.form.gender = await(await result).data.gender;
    this.form.status= await(await result).data.status;

   },

    methods:{

      
      
      handleUpdate(e){
        e.preventDefault();
        const id = this.$route.params.id;

        // console.log('submited',this.form)
        const token = '?access-token=08b816f010a788aa024c36f8552a110c16aad446ec0ecc81cc9d6479c71ce69d'
        axios.put(` https://gorest.co.in/public/v2/users/${id}${token}`,this.form,{

        })
              .then((response) => {
                
                if(response.status === 200){
                  this.$router.push('/');
                  this.$swal({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'success',
                  text: 'User has been updated',
              });
                }
              })

              .catch((error) => {
                error.status;

                 this.$router.push('/');
                  this.$swal({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  icon: 'error',
                  text: 'User has been updated',
              });
                
              })
      },

      //back button
       goToHome(){
      this.$router.push('/');
    }
    }

}
</script>

<style>

</style>