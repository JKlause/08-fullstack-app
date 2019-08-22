import ListApp from './components/app/ListApp.js';

const root = document.getElementById('root');
const listApp = new ListApp();
root.appendChild(listApp.renderDOM());