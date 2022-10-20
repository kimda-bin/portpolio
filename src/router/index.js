import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogGlassesView from '../views/DogGlassesView.vue'
import SafetyCheckView from '../views/SafetyCheckView.vue'
import PetFoodCheckingProgramView from '../views/PetFoodCheckingProgramView.vue'

Vue.use(VueRouter)

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
    path: '/DogGlasses',
    name: 'DogGlasses',
    component: DogGlassesView
  },
  {
    path: '/SafetyCheck',
    name: 'SafetyCheck',
    component: SafetyCheckView
  },
  {
    path: '/PetFoodCheckingProgram',
    name: 'PetFoodCheckingProgram',
    component: PetFoodCheckingProgramView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
