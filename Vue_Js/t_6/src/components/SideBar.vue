<template>
<div>
  <BootstrapSidebar
      :initial-show="initialShow"
      :links="links"
      :header="header"
      :fa="true"
      @sidebarChanged="onSidebarChanged"
    >
      <template v-slot:navbar>
        <b-navbar
          id="mainNavbar"
          toggleable="lg"
          type="light"
          variant="light"
          fixed="top"
        >
          <b-navbar-nav>
            <b-nav-item>  <img class="navbar-brand" v-bind="mainProps" src="../assets/Sinau Coding 1 1.png"> </b-nav-item>
          </b-navbar-nav>
        </b-navbar>
      </template>

      <template v-slot:content>
        <b-container style="margin-top: 56px">
          <router-view />
        </b-container>
      </template>
    </BootstrapSidebar>
  </div>
</template>

<style lang="scss" >
@import "node_modules/vue-bootstrap-sidebar/src/scss/default-theme";
</style>

<style scoped>
  body {
    padding:1rem;
  }
</style>>



<script>
import BootstrapSidebar from "vue-bootstrap-sidebar";

export default {

  components: {
    BootstrapSidebar,
  },
  data() {
    return {
      initialShow: true,
      header: "<h3>SinauKoding</h3>",
      links: [
        { name: "Home", href: { name: "home" } },
        { name: "About", href: { name: "about" }},
        { name: "Contact", href: { name: "contact" }},
      ],

      mainProps:{
        width:90,
        height:35,
        center:true,
      }
    };
  },
  methods: {
    onSidebarChanged() {},
  },

}
</script>

<style>

</style>