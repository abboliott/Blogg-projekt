// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './CatPicture.vue'; // Import your existing view component
import AilienShop from './AilienShop.vue'; // Import the new view component

const decrypt = (salt, encoded) => {
  const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
  const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map(applySaltToChar)
    .map((charCode) => String.fromCharCode(charCode))
    .join("");
};

const routes = [
  { path: '/',
    component: () => import('./CatPicture.vue')
},
{ path: decrypt("heffaklump", "2c32376e4d3377326d47376d6466712e32376e576b6647376d64667136687a6f6671"),
    component: () => import('./AilienShop.vue')
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
