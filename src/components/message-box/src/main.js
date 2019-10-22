import Vue from 'vue'
//识别访问模式 pc? mobile? app
import ModeDrive from '@/components/mode-drive';
Vue.use(ModeDrive)


let messageBoxVue = require('./main.vue').default
let messageBoxVueMob = require('./main_mob').default

let instance = null

const initInstance = (options) => {
// 创建一个VUE构造器
  let messageBoxConstructor
  if (!ModeDrive.isWap()) {
    messageBoxConstructor = Vue.extend(messageBoxVue)
  } else {
    messageBoxConstructor = Vue.extend(messageBoxVueMob)
  }
// 实例化VUE实例
  instance = new messageBoxConstructor({
    data: options
  })
}
const showNextMsg = () => {
  if (!instance) {
    initInstance()
  }
}

const MessageBox = function (Vue, options) {
  //alert(Vue.prototype.$isServer)
  //if (Vue.prototype.$isServer) return
  options = options || {}
  showNextMsg()

  // 此处使用$mount来手动开启编译。用$el来访问元素，并插入到body中
  instance.vm = instance.$mount()

  document.body.appendChild(instance.vm.$el)

  Vue.nextTick(() => {
    for (let prop in options) {
      if (options.hasOwnProperty(prop)) {
        instance[prop] = options[prop];
      }
    }

  });

  return instance.vm
}

MessageBox.alert = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: typeof options === 'object' ? options.message : options,
      confirm: options.confirm ? options.confirm : () => {},
      cancel: options.cancel ? options.cancel : () => {}
    }
  }
  options['type'] = 'alert'
  options['visible'] = true
  //默认配置
  const defaults = {
    //确定事件
    confirm: () => {
    },
    //确定按钮名称
    confirmBtnText: 'Confirm'
  }
  options = Object.assign({}, defaults, options);
  let vm = MessageBox(Vue, options)
  nwCfm("userConfirm", defaults, options)
  return vm
}

MessageBox.confirm = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: typeof options === 'object' ? options.message : options,
      confirm: options.confirm ? options.confirm : () => {},
      cancel: options.cancel ? options.cancel : () => {}
    }
  }
  options['type'] = 'confirm'
  options['visible'] = true
  //默认配置
  const defaults = {
    //确定事件
    confirm: () => {
    },
    //取消事件
    cancel: () => {
    },
    //确定按钮名称
    confirmBtnText: 'Confirm',
    //取消按钮名称
    cancelBtnText: 'Cancel'
  }
  options = Object.assign({}, defaults, options);
  let vm = MessageBox(Vue, options)

  nwCfm('userConfirm', defaults, options)
  return vm
}

//自定义事件触发封装
function nwCfm(confirm, defaults, options) {
  instance.$off(confirm)
  instance.$on(confirm, () => {
    defaults.confirm = options.confirm
    defaults.confirm()
  });
}

export default MessageBox
export {MessageBox};
