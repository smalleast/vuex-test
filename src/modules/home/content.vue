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
  import {AppBase, Home, $api} from 'components/vue/index';

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
    console.log('local1:', AppBase.local);
    AppBase.local = {localTest: '这是测试local的数据'};
    console.log('local2:', AppBase.local);
    console.log('session1:', AppBase.session);
    AppBase.session = {sessionTest: '这是测试session的数据'};
    console.log('session2:', AppBase.session);
    $api.findSellerCenterInfo_100().then(result => {
      console.log('result:', result);
    });
  }

</script>
