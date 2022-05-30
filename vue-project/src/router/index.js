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
import SlotModalLayout from '../views/SlotModalLayout.vue'
import SlotUseModalLayout from '../views/SlotUseModalLayout.vue'
import ProvideInject from '../views/ProvideInject.vue'
import ProvideInjectChild from '../views/ProvideInjectChild.vue'

import CalculTest from '../views/CalculTest.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPI4 from '../views/CompositionAPI4.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'
import CompositionAPIInject from '../views/CompositionAPIInject.vue'
import MixinS from '../views/MixinS.vue'
import Component from '../views/Component.vue'
import CustomDirective from '../views/CustomDirective.vue'
import PluginsTest from '../views/PluginsTest.vue'

import StoreAccess from '../views/StoreAccess.vue'

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
  },
  {
    path: '/slotmodallayout',
    name: 'SlotModalLayout',
    component: SlotModalLayout
  },
  {
    path: '/slotusemodallayout',
    name: 'SlotUseModalLayout',
    component: SlotUseModalLayout
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: ProvideInject
  },
  {
    path: '/provideinjectchild',
    name: 'ProvideInjectChild',
    component: ProvideInjectChild
  },
  {
    path: '/calcultest',
    name: 'CalculTest',
    component: CalculTest
  },
  {
    path: '/compositionapi',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/compositionapi2',
    name: 'CompositionAPI2',
    component: CompositionAPI2
  },
  {
    path: '/compositionapi3',
    name: 'CompositionAPI3',
    component: CompositionAPI3
  },
  {
    path: '/compositionapi4',
    name: 'CompositionAPI4',
    component: CompositionAPI4
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: CompositionAPIProvide
  },
  {
    path: '/compositionapiinject',
    name: 'CompositionAPIInject',
    component: CompositionAPIInject
  },
  {
    path: '/mixins',
    name: 'MixinS',
    component: MixinS
  },
  {
    path: '/Component',
    name: 'Component',
    component: Component
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: CustomDirective
  },
  {
    path: '/pluginstest',
    name: 'PluginsTest',
    component: PluginsTest
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
