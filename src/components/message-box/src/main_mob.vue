<template>
  <div>
    <div v-show="visible" class="popup__mask"></div>
    <transition name="smallTolarge">
      <div class="popup__msg" v-if="type === 'alert' && visible">
        <div class="popup__header">
          <p class="leftmsg">Prompt</p>
          <div class="rightClose" @click="close"></div>
        </div>
        <div class="popup__msg-hint">
          <span v-html="message">{{message}}</span>
        </div>
        <div class="btnWrap">
          <div class="btn" @click="enter">
            {{confirmBtnText}}
          </div>
        </div>
      </div>
    </transition>
    <transition name="smallTolarge">
      <div class="popup__msg" v-if="type === 'confirm' && visible">
        <div class="popup__header">
          <p class="leftmsg">Prompt</p>
          <div class="rightClose" @click="close"></div>
        </div>
        <div class="popup__msg-hint">
          <span v-html="message">{{message}}</span>
        </div>
        <div class="btnWrap">
          <div class="btn conBtn" @click="close">
            {{cancelBtnText}}
          </div>
          <div class="btn" @click="enter">
            {{confirmBtnText}}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'YBMessageBox',
    props: {
      type: {
        type: String,
        default: ''
      },
      message: {
        type: String,
        default: ''
      },
      confirmBtnText: {
        type: String,
        default: 'Confirm',
      },
      cancelBtnText: {
        type: String,
        default: 'Cancel',
      },
      confirm: Function,
      cancel: Function,
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      close() {
        this.visible = false
        this.cancel()
      },
      enter() {
        this.visible = false
        this.$emit('userConfirm')
      }
    }
  }
</script>

<style scoped>
  .popup__mask{
    width: 100%;height: 100%;background: rgba(0, 0, 0, .5);display :flex;flex-direction: column;justify-content: center;align-items: center;position: fixed;top: 0;left: 0;z-index:7002;
  }
  .popup__msg{
    width: 80%;height :30%;background: #fff;border-radius :.3rem;display :flex;flex-direction :column;align-items: center;position: fixed;top: 0;left: 0;right: 0;bottom: 0;margin: auto;z-index: 7003;
  }
  .popup__msg>.popup__header{
    width: 100%;height: .8rem;box-sizing: border-box;border-bottom: 1px solid rgba(38,47,63,.1);display: flex;align-items: center;justify-content: space-between;padding: 0 .3rem 0 .4rem;
  }
  .popup__msg>.popup__header>.leftmsg{
    font-size: .30rem;color:rgba(38,47,63,1);
  }
  .popup__msg>.popup__header>.rightClose{
    width: .3rem;height: .3rem;/*background: url("../../../static/images/mobile/closeBox1.png") no-repeat center;*/padding: .1rem;
    -webkit-background-size: .42rem auto;
    background-size: .42rem auto;
  }
  .popup__msg>.popup__msg-hint{
    color: #246aaf;font-size: .20rem;display :flex;justify-content: center;align-items: center;width: 100%;min-height :2rem;flex-direction: column;padding: 0 .3rem;
  }
  .popup__msg>.popup__msg-hint>span{
    font-size: .28rem;color:rgba(38,47,63,1);text-align: center;word-wrap: break-word;word-break: normal;
  }

  .btn{
    width: 35%;height :75%;background: #2593F9;color: #fff;font-size: .3rem;display: flex;justify-content: center;align-items: center;border-radius: .1rem;cursor: pointer;box-shadow:0 .09rem .24rem 0 rgba(37,147,249,0.45);
  }
  .btn:active{
    background: skyblue
  }
  .btnWrap{
    display: flex;justify-content: center;width: 100%;height: 20%;align-items: center;
  }
  .conBtn{
    margin-right: .58rem;background: transparent;border: 1px solid #2593F9;color: #2593F9 !important;box-sizing: border-box;box-shadow: none;
  }
</style>
