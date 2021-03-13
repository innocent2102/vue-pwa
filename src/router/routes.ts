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
    path: '/camera-view',
    name: RouteName.CAMERA_VIEW,
    component: () => import(/* webpackChunkName: "camera" */ '../views/CameraView/Camera.vue')
  },
  {
    path: '/about',
    name: RouteName.ABOUT,
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  }
]
