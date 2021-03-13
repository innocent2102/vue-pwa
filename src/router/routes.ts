import { RouteConfig } from 'vue-router';
import Home from '@/views/Home/Home.vue';
import { RouteName } from '@/router/route-names';

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: RouteName.HOME,
    component: Home
  },
  {
    path: '/camera',
    name: RouteName.CAMERA,
    component: () => import(/* webpackChunkName: "camera" */ '../views/Camera/Camera.vue')
  },
  {
    path: '/about',
    name: RouteName.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]
