import '../../components/styles/index.scss'
import './style.scss'
import Vue from 'vue'
import content from './content.vue'
import store from './store/main'

new Vue({
  el: '#app',
  store,
  render: h => h(content)
});
