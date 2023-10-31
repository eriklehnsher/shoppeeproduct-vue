import { createRouter } from "vue-router";

import Home from "./HomePage/Home.vue";
// import LoginPage from '@/pages/LoginPage';
// import RegisterPage from '@/pages/RegisterPage';

const routes = [
  {
    path: "/",
    component: Home,

  },
  {
    path: "/product/:id",
    component: () => import ("../src/HomePage/ProductDetail.vue") ,

  },
  // {
  //   path: "/product/product-detail",
  //   component: () => import ("../src/HomePage/ProductDetail.vue") ,

  // },
  
  

];

const router = createRouter({
   mode: 'history',
    routes
    
})

export default router;