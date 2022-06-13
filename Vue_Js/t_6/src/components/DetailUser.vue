<template>
  <div class="container mt-5">
    <b-card class="mb-2 p-3">
        <p class="h4">Detail User</p>
        <div class="container mb-5">
            <b-row align-h="center">
                <b-col cols="4">Name</b-col>
                <b-col cols="4">:{{user.name}}</b-col>
            </b-row>

            <b-row align-h="center">
                <b-col cols="4">Email</b-col>
                <b-col cols="4">:{{user.email}}</b-col>
            </b-row>

            <b-row align-h="center">
                <b-col cols="4">Gender</b-col>
                <b-col cols="4">:{{user.gender}}</b-col>
            </b-row>

            <b-row align-h="center">
                <b-col cols="4">Status</b-col>
                <b-col cols="4">:{{user.status}}</b-col>
            </b-row>
        </div>

         <router-link :to="{name:'home'}" class="mt-5">
            <b-button variant="danger"> Back</b-button>
        </router-link>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            user: {},
        }
    },

    async created(){
        const {id} = this.$route.params;
        const token = '?access-token=08b816f010a788aa024c36f8552a110c16aad446ec0ecc81cc9d6479c71ce69d';
        const user = await axios.get(`https://gorest.co.in/public/v2/users/${id}${token}`);
        this.user = user.data;

    

        
    },

}
</script>

<style>

</style>