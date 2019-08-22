import Component from '../Component.js';
import Header from '.Header.js';

class ListApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    renderHTML() {
        
    }
}
export default ListApp;