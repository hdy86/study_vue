import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import RenderingVIf from '../views/RenderingVIf.vue'
import EventVOn from '../views/EventVOn.vue'
import ComputedTest from '../views/ComputedTest.vue'
import WatchTest from '../views/WatchTest.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ChildComponent from '../views/ChildComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ChildComponent5 from '../views/ChildComponent5.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'

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
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/childcomponent',
    name: 'ChildComponent',
    component: ChildComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/childcomponent5',
    name: 'ChildComponent5',
    component: ChildComponent5
  },
  {
    path: '/parentcomponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
