import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    // Iron Work
    {
      path: "/ironwork",
      name: "ironwork",
      component: () => import("../views/IHomeView.vue"),
    },
    // furniture
    {
      path: "/furniture",
      name: "furniture",
      component: () => import("../views/FHomeView.vue"),
    },
    // Adming panel
    {
      path: "/admin/login",
      name: "login",
      component: () => import("../views/admin/LoginView.vue"),
    },
    {
      path: "/admin/home",
      name: "admin home",
      component: () => import("../views/admin/AdminHome.vue"),
    },
    {
      path: "/admin/category/add",
      name: "admin category",
      component: () => import("../views/admin/AddCategory.vue"),
    },
    {
      path: "/admin/gallery/add",
      name: "admin gallery",
      component: () => import("../views/admin/AddGallery.vue"),
    },
    {
      path: "/admin/inbox",
      name: "admin inbox",
      component: () => import("../views/admin/AdminInbox.vue"),
    },
    {
      path: "/admin/inbox/oxundu",
      name: "admin oxundu",
      component: () => import("../views/admin/ShowMessage.vue"),
    },
    {
      path: "/admin/products/add",
      name: "admin product",
      component: () => import("../views/admin/AddProduct.vue"),
    },
  ],
});

export default router;
