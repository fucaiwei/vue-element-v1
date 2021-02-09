import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './rules'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})


const defaultTitle = '网站管理'
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
