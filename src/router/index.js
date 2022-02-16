import { createRouter, createWebHistory } from 'vue-router';
import Monster from '@views/Monster.vue';
import Spell from '@views/Spell.vue';
import Trap from '@views/Trap.vue';
import Card from '@views/Card.vue';
import NotFound from '@views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Monster',
    component: Monster,
  },
  {
    path: '/spell',
    name: 'Spell',
    component: Spell,
  },
  {
    path: '/trap',
    name: 'Trap',
    component: Trap,
  },
  {
    path: '/card/:id',
    name: 'Detail Card',
    component: Card,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
