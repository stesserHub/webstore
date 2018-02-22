import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Collection from '@/components/Collection'
import Product from '@/components/Product'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/collection/',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    }
  ]
})