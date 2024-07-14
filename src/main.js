import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

  // fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
  // collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import VueScroller from 'vue-scroller'  // 触底加载
import VueLoadmore from 'vuejs-loadmore'; //下拉刷新 触底加载


/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
//Vue.use(ElementUI, { locale })
//如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(VueScroller)
Vue.use(VueLoadmore);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
