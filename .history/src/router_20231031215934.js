import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./HomePage/Home.vue";
// import LoginPage from '@/pages/LoginPage';
// import RegisterPage from '@/pages/RegisterPage';

const routes = [
  {
    path: "/",
    component: Home,

  },
  {
    path: "/product/:product_id",
    component: () => import ("./products/ProductDetail.vue") ,

  },
  // {
  //   path: "/product/product-detail",
  //   component: () => import ("../src/HomePage/ProductDetail.vue") ,

  // },
  
  

];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    
})

export default router;