<template>
  <div class="popupWrap">
    <div class="popup__mask" v-show="visible"></div>
    <transition name="smallTolarge">
      <div v-if="type === 'alert' && visible" class="popup__msg">
        <div class="popup__msg-hint">
          <!--<div class="iconfont"></div>-->
          <span v-html="message">{{message}}</span>
        </div>
        <div class="line"></div>
        <div class="btnWrap">
          <div class="btn" @click="enter">
            {{confirmBtnText}}
          </div>
        </div>
      </div>
    </transition>
    <transition name="smallTolarge">
      <div v-if="type === 'confirm' && visible" class="popup__msg">
        <div class="popup__msg-hint">
          <!--<span class="iconfont"></span>-->
          <span v-html="message">{{message}}</span>
        </div>
        <div class="line"></div>
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
        //this.$emit('close')
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
    width: 100%;height: 100%;background: rgba(0, 0, 0, .5);display :flex;flex-direction: column;justify-content: center;align-items: center;position: fixed;top: 0;left: 0;z-index:2;
  }
  .popup__msg{
    width: 30%;height :30%;background: rgba(72,86,109,.8);border-radius :.3rem;display :flex;flex-direction :column;align-items: center;position: fixed;left: 0;right: 0;top: 0;bottom: 0;margin: auto;z-index: 501;
  }
  .popup__msg>.popup__msg-hint{
    color: #fff;font-size: .20rem;display :flex;justify-content: center;align-items: center;width: 100%;height :60%;padding: 0 .5rem;
  }
  .popup__msg>.popup__msg-hint>.iconfont{
    display: inline-block;width: 20%;height :25%;font-size: .80rem;/*background: url("../../../static/images/iconfont.png") no-repeat center;-webkit-background-size: 90% auto;background-size: 90% auto;*/margin-right: 3%;
  }
  .popup__msg>.popup__msg-hint>span{
    font-size: .26rem;text-align: center;word-wrap: break-word;word-break: normal;
  }
  .popup__msg>.line{
    border-bottom: 1px solid #01aeff;width: 80%;opacity: .3;
  }
  .btn{
    width: 25%;height :50%;margin-top: 4%;background: #01aeff;color: #fff;font-size: .25rem;display: flex;justify-content: center;align-items: center;border-radius: .08rem;cursor: pointer
  }
  .btnWrap{
    display: flex;justify-content: center;width: 100%;height: 30%;
  }
  .conBtn{
    margin-right: 10%;background: transparent;border: 1px solid #01aeff;color: #01aeff !important;box-sizing: border-box
  }
</style>
