import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    name:'Login',
    component:()=> import('views/Login.vue')
  },
  {
    path:'/video',
    name:'video',
    component:()=> import('views/Video.vue')
  },
  {
    path:'/user',
    name:'User',
    component:()=> import('views/User.vue')
  },
  {
    path:'/other',
    name:'Other',
    component:()=>import('views/Other.vue'),
    children:[
      {
        path:'one',        //这里的path不能加/
        name:'OtherOne',
        component:()=>import('components/OtherOne.vue')
      },
      {
        path:'two',
        name:'OtherTwo',
        component:()=>import('components/OtherTwo.vue')
      }
      
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
