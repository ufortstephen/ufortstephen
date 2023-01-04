import { createRouter, createWebHistory } from "vue-router";
import authRoutes from '../mudules/auth/router'

import Home from '../mudules/auth/views/Home.vue'



const baseRoutes = [
 
  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes.concat(
  authRoutes
  ),
});


export default router;
