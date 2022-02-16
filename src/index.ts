import '@/styles/style.scss';
import {component} from '@/js/example';
import simple from '@/js/simple';

let main = document.querySelector('main');
main.appendChild(component());
main.appendChild(simple());
