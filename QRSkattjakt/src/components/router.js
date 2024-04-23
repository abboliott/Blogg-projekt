// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './CatPicture.vue'; // Import your existing view component
import AilienShop from './AilienShop.vue'; // Import the new view component

const routes = [
  { path: '/',
    component: () => import('./CatPicture.vue')
},
{ path: '/14mN0t1nD4nger-14mTheD4nger5kyler',
    component: () => import('./AilienShop.vue')
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
