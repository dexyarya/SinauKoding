<template>
  
  <div>
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

     <div class="Title-top d-flex justify-content-between mb-5">
        <p class="h4">Daftar Pengguna</p>
        <b-button variant="primary" v-b-modal.modal-prevent-closing >Buat Pengguna</b-button>
      </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add New User"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input> 
        </b-form-group>
        
        <b-form-group
          label="Email"
          label-for="email-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input> 
        </b-form-group>
        
         <b-form-group
          label="Gender"
          label-for="gender-input"
          invalid-feedback="Gender is required"
          :state="genderState"
        >
          <b-form-input
            id="gender-input"
            v-model="gender"
            :state="genderState"
            required
          ></b-form-input> 
        </b-form-group>
        
           <b-form-group
          label="Status"
          label-for="status-input"
          invalid-feedback="Status is required"
          :state="statusState"
        >
          <b-form-input
            id="stauts-input"
            v-model="status"
            :state="statusState"
            required
          ></b-form-input> 
        </b-form-group>
        
        
        
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {

     data() {
      return {
        name: '',
        nameState: null,
        submittedNames: [],
        
        email: '',
        emailState: null,
        emailNames: [],
        
        gender: '',
        genderState: null,
        genderNames: [],
        
        status: '',
        statusState: null,
        statusNames: [],
        
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }

}
</script>

<style>

</style>