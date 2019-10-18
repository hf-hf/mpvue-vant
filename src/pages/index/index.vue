<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
      v-if="testValue == 4"
    />
    <!-- 组件在main.json中引入 -->
    <!-- <van-button @click="onClick">按钮</van-button>
    <van-notify id="van-notify" />-->

    <van-button type="primary"
                @click="onClick">测试</van-button>
    <van-icon name="success" />
    <!-- <van-action-sheet :show="show"
                      :actions="actions"
                      @close="onClose"
    @select="onSelect" />-->
    <van-popup :show="show"
               :close-on-click-overlay="true"
               overlay-style="background:red"
               position="top"
               :overlay="true"
               @close="onClose">内容</van-popup>

    <van-button type="primary">按钮</van-button>
    <van-rate :value="testValue" v-on:input="testValue = $event.mp.detail" @change="onChange"/>
  </div>
</template>

<script>
// 这个是唤起Notify的函数，参照[Vant 文档](https://youzan.github.io/vant-weapp/#/notify)
import Notify from '@/../static/vant/notify/notify'
import Toast from '@/../static/vant/toast/toast'
export default {
  data () {
    return {
      actions: [
        {
          name: '选项'
        },
        {
          name: '分享',
          subname: '描述信息',
          openType: 'share'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
      ],
      show: false,
      testValue: 4
    }
  },
  methods: {
    onClick () {
      this.show = true
    },
    onClose () {
      this.show = false
    },

    onSelect (event) {
      console.log(event.detail)
    },
    onChange(value) {
      console.log(value.mp.detail)
      console.log(this.testValue)
    },
    test(){
      this.$httpWX.post({
        url: '/mms/country/queryValidZoneListForMallHome',
        data: {
          'categoryType': 'SaleGoodsType@sim',
          'streamNo': 'web_bss153570682909641893',
          'reqSource': 'MALL_H5',
          'appid': 'string',
          'timestamp': 1535706829096,
          'sign': 'string'
        }
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
</style>
