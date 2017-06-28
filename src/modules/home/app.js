/**
 * Created by dcpai on 2017/6/28.
 */
import 'babel-polyfill'
import Vue from 'vue'
import Counter from './content.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
