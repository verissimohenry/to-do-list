import './style.scss';
import { displayNav, displayFooter } from './structure';
import { start } from './initStart';

const initializer = () => {
  displayNav();
  start();
  displayFooter();
};

initializer();
