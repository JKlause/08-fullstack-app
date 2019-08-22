import App from './components/app/App.js';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.renderDOM());