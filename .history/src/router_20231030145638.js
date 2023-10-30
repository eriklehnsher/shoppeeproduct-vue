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
    path: "/product-detail",
    component: () => import ("../src/HomePage/ProductDetail.vue") ,

  },
  {
    path: "/register",
    component: () => import ("../src/pages/RegisterPage.vue") ,

  },
  {
    path: "/userInfor",
    component: () => import ("../src/pages/Portfolio/UserInfo.vue") ,

  },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
    
})

export default router;