

import { createApp } from 'vue';
import App from './App.vue';
import Bind from './components/Bind.vue';
import Model from './components/Model.vue';
import On from './components/On.vue';
import If from './components/If.vue';
import Show from './components/Show.vue';
import For from './components/For.vue';
import Computed from './components/Computed.vue';
import Exercice from './components/choix.vue';
import Exercice2 from './components/Exercice2.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/component-v-bind',
    name: 'component-v-bind',
    component: Bind,
  },
  {
    path: '/component-v-model',
    name: 'component-v-model',
    component: Model,
  },
  {
    path: '/component-v-on',
    name: 'component-v-on',
    component: On,
  },
  {
    path: '/component-v-if',
    name: 'component-v-if',
    component: If,
  },
  {
    path: '/component-v-show',
    name: 'component-v-show',
    component: Show,
  },
  {
    path: '/component-v-for',
    name: 'component-v-for',
    component: For,
  },

  {
    path: '/component-computed',
    name: 'component-computed',
    component: Computed,
  },
  {
    path: '/component-exercice',
    name: 'component-exercice',
    component: Exercice,
  },
  {
    path: '/component-exercice2',
    name: 'component-exercice2',
    component: Exercice2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
