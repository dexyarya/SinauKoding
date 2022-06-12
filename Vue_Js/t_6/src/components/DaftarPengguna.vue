<template>
  <div class="container mt-5">
     <!-- <FormAdd/> -->

      <div class="Title-top d-flex justify-content-between mb-5">
        <p class="h4">User List</p>
        <router-link :to="{name:'fromadd'}">
          <b-button variant="primary" >Create User</b-button>

        </router-link>
       
        
      </div>

    <div class="card">
      <b-table 
      :items="items"
      :fields="fields" 
      responsive 
      class="text-justify"
      >
      <template #cell(no)="data" >
        {{ data.index + 1 }}
      </template>
        <template v-slot:cell(actions)="data">
            <router-link :to="{name:'detailUser',params:{id:data.item.id}}">
            <b-button size="sm"  class="mr-2" variant="info" title="View">
              <b-icon icon="eye" variant="light"></b-icon>
            </b-button>
            </router-link>
            
          <router-link :to="{name:'editFrom',params:{id:data.item.id}}">
            <b-button size="sm" class="mr-2" variant="warning" title="Edit">
              <b-icon icon="pencil-square" variant="light"></b-icon>
            </b-button>
          </router-link>
          
            <b-button size="sm"  v-on:click ="deleteUser(data.item.id)"  class="mr-2" variant="danger" title="Delete">
              <b-icon icon="trash"></b-icon>
            </b-button>
          
        </template>
       
      </b-table>
    
    </div>
  </div>
</template>

<script>

// import FormAdd from "./FormAdd.vue";
import axios from 'axios';
export default {


  components:{
    // FormAdd
  },
  data() {
    return {
      fields: [
        'no',
        'name',
        'email',
        'gender',
        'status',
        { key: 'actions', label: 'Actions' }
      ],

      items: [],
     
    }
  },
  created() {
    

  },
  mounted(){
    this.getData();
  },

  methods: {
    async getData() {
      const data = axios.get('https://gorest.co.in/public/v2/users')
      // console.log(data);
      this.items = await(await data).data;
      console.log(this.items);
    },
  

    deleteUser(item) {
      const token = '?access-token=08b816f010a788aa024c36f8552a110c16aad446ec0ecc81cc9d6479c71ce69d'
      
      axios.delete(`https://gorest.co.in/public/v2/users/${item}${token}`)
      .then(()=>{
          this.$swal({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                icon: 'success',
                text: 'User has been deleted',
              });
        
        this.getData();
        
      })
      .catch((error)=>{
        console.log(error.data);
      })
    },

  }
}
</script>