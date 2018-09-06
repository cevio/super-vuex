import { ChildVuex } from "super-vuex";
import axios from 'axios';

const child = new ChildVuex('user', {
  name: 'evio',
  age: 18,
  load: {
    allow: true,
    data: {
      a:1,
      students: [
        {
          name: 'yixianle',
          age: 10,
          id: 0
        }
      ]
    },
  }
});

export default child;

child.setAction('load.data', async () => {
  const res = await axios.get('https://registry.npm.taobao.org/');
  child.commit('html', res.data);
});