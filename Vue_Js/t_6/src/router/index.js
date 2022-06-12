import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import FromAdd from "../components/FormAdd.vue";
import EditFrom from "../components/EditForm.vue";
import DetailUser from "../components/DetailUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/fromadd",
    name: "fromadd",
    component: FromAdd,
  },
  {
    path: "/editFrom/:id",
    name: "editFrom",
    component: EditFrom,
  },
  {
    path: "/detailUser/:id",
    name: "detailUser",
    component: DetailUser,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
