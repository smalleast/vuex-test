<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button v-on:click="save">save</button>
    <Home></Home>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import {Home} from 'components/vue/index';

  export default {
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: {
      ...mapActions([
        'increment',
        'incrementIfOdd'
      ]),
      save: save
    },
    name: 'Content',
    components: {
      Home
    }
  }
  function save() {
    console.log('这是一条测试的数据');
  }
</script>
