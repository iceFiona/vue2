import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route_map' // 路由映射

Vue.use(VueRouter)

const router = new VueRouter({
    'linkActiveClass': 'active',
    mode: 'history',
    routes: [
    { 
        path: '/redirect', 
        name: 'redirect', 
        component: {
            mounted () {
                this.$router.replace(this.$route.query.dest)
            }
        }
    },{ 
        path: '/login', 
        name: 'login', 
        component(resolve) {
            require(['view/login/'], resolve)
        }
    },{
      path: '/', 
      name: 'app', 
      component(resolve) {
          require(['rootPath/'], resolve)
      },
      children: routes
    }]
})

// 简单的路由跳转 Logger
router.beforeEach((to, from, next) => {
  console.info(`[RouteLogger] ${decodeURI(from.path)} => ${decodeURI(to.path)}`)
  next()
})

router.afterEach(route => {
  // ...
})


// 权限拦截
// router.beforeEach((to, from, next) => {
//   if (to.needToLogin && !userService.data) {
//     alert('需要登录后才能访问')
//     console.info('[Auth:Failed] 中断跳转')
//     return abort()
//   }
//   next()
// })

export default router
