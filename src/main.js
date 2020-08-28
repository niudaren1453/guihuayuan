import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
// import './plugins/element.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import '@/assets/global.css'
import '@/assets/icon.css'
import '@/assets/stylus/global.styl'
import axios from 'axios'
import { getToken } from '@/utils/auth.js'
Vue.prototype.$axios = axios
Vue.use(MintUI)
Vue.use(Element)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    console.log(to)
    const role = getToken()
    if (role) {
        localStorage.setItem('phone', role)
        next()
    } else {
        next('/login')
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
