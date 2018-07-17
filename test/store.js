import { SuperVuex } from 'super-vuex';
import UserStore from './store/user';

const Main = new SuperVuex('test');
Main.setState({
  count: 1
});
Main.setModule(UserStore);
export default Main.init();