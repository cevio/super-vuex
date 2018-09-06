<template>
  <div>
    <h3>User module</h3>
    <p>Name: {{name}} <button @click="changeName">-_-</button></p>
    <p>A: {{dataA}} <button @click="changeA">-_-</button></p>
    <p>B: {{dataB}} <button @click="changeB">-_-</button> <button @click="changeC">#</button></p>
    <p>C: {{a}} <button @click="register">register new sub module: a</button></p>
    <ol>
      <li v-for="item in students" :key="item.id">{{item.name}} - id: {{item.id}}</li>
    </ol>
    <p>
      <button @click="pushData">push</button>
      <button @click="unshiftData">unshift</button>
      <button @click="popData">pop</button>
      <button @click="shiftData">shift</button>
      <button @click="spliceData">splice</button>
      <button @click="reverseData">reverse</button>
      <button @click="sortData">sort</button>
    </p>
    <p><button @click="getData">getData npm</button></p>
    <pre v-html="html"></pre>
  </div>
</template>

<script>
  import store from './store';
  import { ChildVuex } from 'super-vuex';
  const subs = new ChildVuex('subs');
  export default {
    store: store,
    name: "index",
    data() {
      return {
        a: null
      }
    },
    methods: {
      changeName() {
        this.$store.user.commit('name', 'evio:' + Date.now())
      },
      changeA() {
        this.$store.user.commit(`load['data'].a`, 2)
      },
      changeB() {
        this.$store.user.commit(`load.data.b`, 3)
      },
      changeC() {
        this.$store.user.commit(`load.data.b`, Date.now())
      },
      pushData() {
        this.$store.user.push('load.data.students', {
          name: 'abc',
          age: 29,
          id: Date.now()
        })
      },
      unshiftData() {
        this.$store.user.unshift('load.data.students', {
          name: 'def',
          age: 22,
          id: Date.now()
        })
      },
      popData() {
        this.$store.user.pop('load.data.students');
      },
      shiftData() {
        this.$store.user.shift('load.data.students');
      },
      spliceData() {
        this.$store.user.splice('load.data.students', 2, 2);
      },
      reverseData() {
        this.$store.user.reverse('load.data.students');
      },
      sortData() {
        this.$store.user.sort('load.data.students', (a, b) => a.id - b.id);
      },
      getData() {
        this.$store.user.dispatch('load.data');
      },
      register() {
        subs.setState({
          a:1
        });
        this.$store.$connect.registerModule(subs);
        this.a = this.$store.subs.get('a');
      }
    },
    computed: {
      name() {
        return this.$store.user.get('name');
      },
      dataA() {
        return this.$store.user.get('load.data.a')
      },
      dataB() {
        return this.$store.user.get('load.data.b')
      },
      students() {
        return this.$store.user.get('load.data.students')
      },
      html() {
        return this.$store.user.get('html')
      }
    }
  }
</script>