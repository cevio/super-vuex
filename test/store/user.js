import { ChildVuex } from "super-vuex";

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
    allow: true
  }
};