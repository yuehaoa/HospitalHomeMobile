import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import SB from './colorui/components/myStatusBar.vue'
import bottomNavBar from './colorui/components/bottomNavBar.vue'
Vue.component('cu-custom',cuCustom)
Vue.component('statusBar',SB)
Vue.component('bottom-navbar',bottomNavBar)

Vue.config.productionTip = false
let app = require("@/config");
Vue.prototype.app=app;
require("./init");
App.mpType = 'app'

const vm = new Vue({
    ...App
})
vm.$mount()
