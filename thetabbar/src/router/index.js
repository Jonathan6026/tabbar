import Vue from 'vue'
import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'

const Home = () => import('../pages/home/Home.vue')
const Category = () => import('../pages/category/Category.vue')
const Cart = () => import('../pages/cart/Cart.vue')
const Profile = () => import('../pages/profile/Profile.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    }

  ],
  mode:'history'
})
