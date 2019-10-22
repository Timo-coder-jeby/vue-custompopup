import MessageBoxMain from './src/main.js';

const MessageBox = {
	install (Vue) {
		Vue.prototype.$alert = MessageBoxMain.alert
		Vue.prototype.$confirm = MessageBoxMain.confirm

	}
}

export default MessageBox;
