import Vue from 'vue'
import store from './store/store.js'
import App from './App.vue'
import Fly from 'flyio/dist/npm/wx'


// 设置vue的提示功能关闭
Vue.config.productionTip = false

// 声明当前组件的类型
App.mpType = 'app'

// 将store对象纺织在Vue原型上
Vue.prototype.$store = store

var fly = new Fly
Vue.prototype.$fly = fly

// 生成应用的实例
const app = new Vue()

// 挂载整个应用
app.$mount()
