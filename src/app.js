/* 启动文件 */
import Vue from 'vue'
import './directives/'
import './filters/'
import router from './routes/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'common/style/base.less'

Vue.use(ElementUI)

if (__DEV__) {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = true
}

if (__INIT__) {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}

let app = new Vue({
  router,
}).$mount('#app')


export default app
