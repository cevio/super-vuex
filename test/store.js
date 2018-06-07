import { SuperVuex } from 'super-vuex';
import UserStore from './store/user';

const Main = new SuperVuex();
Main.setModule(UserStore);
export default Main.init();