<template>
  <div>
    <p>name: {{$store.state.user.name}}</p>
    <p>age: {{$store.state.user.age}}</p>
    <p>logined: {{$store.state.user.load.allow}}</p>
    <p>Students:</p>
    <ul>
      <li v-for="student in $store.state.user.students" :key="student.age">
        <p>name: {{student.name}}</p>
        <p>age: {{student.age}}</p>
      </li>
    </ul>
    <p><button @click="changeName">修改名字</button></p>
    <p><button @click="changeAllow">不许登录</button></p>
    <p><button @click="pushStudent">Array.push</button></p>
    <p><button @click="unshiftStudent">Array.unshift</button></p>
    <p><button @click="popStudent">Array.pop</button></p>
    <p><button @click="shiftStudent">Array.shift</button></p>
    <p><button @click="deleteStudent">Array.splice</button></p>
    <p><button @click="gets">获取{{$store.state.user.load.data.app_version}}</button></p>
    <p><button @click="registerModule">动态注入module</button></p>
  </div>
</template>

<script>
  import store from './store';
  import { ChildVuex } from 'super-vuex'
  export default {
    store: store,
    name: "index",
    methods: {
      changeName() {
        this.$store.user.commit('name', 'someone');
        console.log(this.$store)
      },
      changeAllow() {
        this.$store.user.commit('load.allow', false);
      },
      pushStudent() {
        this.$store.user.push('students', {
          name: 'huaping',
          age: 300
        }, {
          name: 'abc',
          age: 72
        });
      },
      unshiftStudent() {
        this.$store.user.unshift('students', {
          name: 'huaping1',
          age: 302
        });
      },
      popStudent() {
        this.$store.user.pop('students');
      },
      shiftStudent() {
        this.$store.user.shift('students');
      },
      deleteStudent() {
        this.$store.user.splice('students', 1, 1);
      },
      gets() {
        this.$store.user.dispatch('load.data');
      },
      registerModule() {
        const subs = new ChildVuex('subs');
        subs.value = {
          name: 'demo',
          subs: [1,2,3,4]
        };
        this.$store.registerModule(subs);
        console.log(this.$store);
      }
    }
  }
</script>

<style scoped>

</style>