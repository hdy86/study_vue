import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/renderingvif',
    name: 'renderingvif',
    component: () => import(/* webpackChunkName: "renderingvif" */ '../views/RenderingVIf.vue')
  },
  {
    path: '/eventvon',
    name: 'eventvon',
    component: () => import(/* webpackChunkName: "eventvon" */ '../views/EventVOn.vue')
  },
  {
    path: '/computedtest',
    name: 'computedtest',
    component: () => import(/* webpackChunkName: "computedtest" */ '../views/ComputedTest.vue')
  },
  {
    path: '/watchtest',
    name: 'watchtest',
    component: () => import(/* webpackChunkName: "watchtest" */ '../views/WatchTest.vue')
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: () => import(/* webpackChunkName: "databindinglist2" */ '../views/DataBindingList2.vue')
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: () => import(/* webpackChunkName: "nestedcomponent" */ '../views/NestedComponent.vue')
  },
  {
    path: '/childcomponent',
    name: 'ChildComponent',
    component: () => import(/* webpackChunkName: "childcomponent" */ '../views/ChildComponent.vue')
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: () => import(/* webpackChunkName: "parentcomponent" */ '../views/ParentComponent.vue')
  },
  {
    path: '/childcomponent5',
    name: 'ChildComponent5',
    component: () => import(/* webpackChunkName: "childcomponent5" */ '../views/ChildComponent5.vue')
  },
  {
    path: '/parentcomponent5',
    name: 'ParentComponent5',
    component: () => import(/* webpackChunkName: "parentcomponent5" */ '../views/ParentComponent5.vue')
  },
  {
    path: '/slotmodallayout',
    name: 'SlotModalLayout',
    component: () => import(/* webpackChunkName: "slotmodallayout" */ '../views/SlotModalLayout.vue')
  },
  {
    path: '/slotusemodallayout',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slotusemodallayout" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "provideinject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/provideinjectchild',
    name: 'ProvideInjectChild',
    component: () => import(/* webpackChunkName: "provideinjectchild" */ '../views/ProvideInjectChild.vue')
  },
  {
    path: '/calcultest',
    name: 'CalculTest',
    component: () => import(/* webpackChunkName: "calcultest" */ '../views/CalculTest.vue')
  },
  {
    path: '/compositionapi',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "compositionapi" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "compositionapi2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionapi3',
    name: 'CompositionAPI3',
    component: () => import(/* webpackChunkName: "compositionapi3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/compositionapi4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "compositionapi4" */ '../views/CompositionAPI4.vue')
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "compositionapiprovide" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/compositionapiinject',
    name: 'CompositionAPIInject',
    component: () => import(/* webpackChunkName: "compositionapiinject" */ '../views/CompositionAPIInject.vue')
  },
  {
    path: '/mixins',
    name: 'MixinS',
    component: () => import(/* webpackChunkName: "mixins" */ '../views/MixinS.vue')
  },
  {
    path: '/Component',
    name: 'Component',
    component: () => import(/* webpackChunkName: "Component" */ '../views/Component.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customdirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/pluginstest',
    name: 'PluginsTest',
    component: () => import(/* webpackChunkName: "pluginstest" */ '../views/PluginsTest.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
