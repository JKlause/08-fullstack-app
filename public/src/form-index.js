import FormApp from './components/app/FormApp.js';

const root = document.getElementById('root');
const formApp = new FormApp();
root.appendChild(formApp.renderDOM());