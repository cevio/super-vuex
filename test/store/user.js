import { ChildVuex } from "super-vuex";
import axios from 'axios';

const child = new ChildVuex('user');
export default child;

child.value = {
  name: 'evio',
  age: 18,
  students: [
    {
      name: 'yixianle',
      age: 10
    }
  ],
  load: {
    allow: true,
    data: {}
  }
};

child.setAction('load.data', async () => {
  const res = await axios.get('https://registry.npm.taobao.org/');
  child.commit('load.data', res.data);
});