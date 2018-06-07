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
    <p><button @click="deleteAllow">删除登录</button></p>
  </div>
</template>

<script>
  import Factory from './store';
  export default {
    store: Factory.store,
    name: "index",
    methods: {
      changeName() {
        Factory.commit('user:name', 'someone');
      },
      changeAllow() {
        Factory.commit('user:load.allow', false);
      },
      pushStudent() {
        Factory.push('user:students', {
          name: 'huaping',
          age: 300
        });
      },
      unshiftStudent() {
        Factory.unshift('user:students', {
          name: 'huaping1',
          age: 302
        });
      },
      deleteStudent() {
        Factory.splice('user:students', 0, 1);
      },
      deleteAllow() {
        Factory.delete('user:load.allow');
      }
    }
  }
</script>

<style scoped>

</style>