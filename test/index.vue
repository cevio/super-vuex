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
    <p><button @click="pushStudent">添加用户</button></p>
    <p><button @click="unshiftStudent">前置用户</button></p>
    <p><button @click="deleteStudent">删除第一个用户</button></p>
    <p><button @click="gets">获取{{$store.state.user.load.data.app_version}}</button></p>
  </div>
</template>

<script>
  import store from './store';
  export default {
    store: store,
    name: "index",
    methods: {
      changeName() {
        this.$store.user.commit('name', 'someone');
      },
      changeAllow() {
        this.$store.user.commit('load.allow', false);
      },
      pushStudent() {
        this.$store.user.push('students', {
          name: 'huaping',
          age: 300
        });
      },
      unshiftStudent() {
        this.$store.user.unshift('students', {
          name: 'huaping1',
          age: 302
        });
      },
      deleteStudent() {
        this.$store.user.splice('students', 0, 1);
      },
      gets() {
        this.$store.user.dispatch('load.data');
      }
    }
  }
</script>

<style scoped>

</style>