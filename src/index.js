import './style.scss';
import { displayNav, displayFooter } from './structure';
import { start } from './initStart';

initializer = () => {
  displayNav();
  start();
  displayFooter();
}

initializer();
