import Vue from 'vue'
import App from './App.vue'

//全局引入轮播图组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'
import router from './router'

import myCard from './components/Card'
Vue.component('my-card',myCard)

import myListCard from './components/ListCard'
Vue.component('my-list-card',myListCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
