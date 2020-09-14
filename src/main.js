import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
// import './plugins/element.js'
import './plugins/vant.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'
import '@/assets/global.css'
import '@/assets/icon.css'
import '@/assets/stylus/global.styl'
import '@/components/directive.js'
import axios from 'axios'
// import { getToken } from '@/utils/auth.js'
Vue.prototype.$axios = axios
Vue.use(MintUI)
Vue.use(Element)

Vue.config.productionTip = false
// router.beforeEach((to, from, next) => {
//     const role = getToken()
//     if (!role && to.path !== '/login') {
//         next('/login')
//     } else {
//         next()
//     }
// })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
