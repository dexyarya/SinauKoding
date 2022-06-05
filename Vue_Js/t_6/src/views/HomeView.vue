<template>
  <div class="home" >
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <DaftarPengguna/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import DaftarPengguna from '@/components/DaftarPengguna.vue'


export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    DaftarPengguna
    
}
}
</script>
