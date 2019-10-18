import Vue from 'vue'
import App from './index'

import WXrequest from '../../utils/wx-request'
Vue.prototype.$httpWX = WXrequest

const app = new Vue(App)
app.$mount()
