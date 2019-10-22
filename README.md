# vue-custompopup

###使用方法
```
入口main.js中引入
import MessageBox from '@/components/message-box';
Vue.use(MessageBox)

页面中调用

普通alert弹窗
this.$alert('xxx')
this.$alert({message:'xxx',confirm:()=>{})

confirm弹窗
this.$confirm({message:'xxx',confirm:()=>{},cancel:()=>{}})
```
####API

```
message:弹窗显示的内容
confirm:点击确认按钮的回调函数
cancel:点击取消按钮的回调函数
confirmBtnText:自定义确认按钮显示的文字
cancelBtnText:自定义取消按钮显示的文字
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
