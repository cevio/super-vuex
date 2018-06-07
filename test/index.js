import Vue from 'vue';
import app from './index.vue';

const Page = Vue.extend(app);
new Page({
  el: '#app'
});