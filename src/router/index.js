import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';

const routes = [
  {
    path: '/character/:name/:id',
    name: 'Character',
    component: () => import('../views/Character'),
  },
  {
    path: '/episode/:id',
    name: 'Episode',
    component: () => import('../views/Episode'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});

export default router;
