import Vue from 'vue'
import App from './App.vue'

//识别访问模式 pc? mobile? app
import ModeDrive from '@/components/mode-drive';
Vue.use(ModeDrive)

//统一提示框
import MessageBox from '@/components/message-box';
Vue.use(MessageBox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
