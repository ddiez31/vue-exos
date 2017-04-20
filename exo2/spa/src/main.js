// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import Hello from './components/Hello'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

// Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Hello },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/portfolio', component: Portfolio }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app')