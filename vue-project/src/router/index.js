import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import RenderingVIf from '../views/RenderingVIf.vue'
import EventVOn from '../views/EventVOn.vue'
import ComputedTest from '../views/ComputedTest.vue'
import WatchTest from '../views/WatchTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/renderingvif',
    name: 'renderingvif',
    component: RenderingVIf
  },
  {
    path: '/eventvon',
    name: 'eventvon',
    component: EventVOn
  },
  {
    path: '/computedtest',
    name: 'computedtest',
    component: ComputedTest
  },
  {
    path: '/watchtest',
    name: 'watchtest',
    component: WatchTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
