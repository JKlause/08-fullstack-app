import Component from '../Component.js';
import Header from './Header.js';

class ListApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    renderHTML() {
        return /*html*/`
        <main>
            <div id="trumpet-table-main">
                <h2>Portland Trumpet Player Database</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Main Type</th>
                                <th>Secondary Type</th>
                                <th>Main Ensemble</th>
                                <th>Second Ensemble</th>
                                <th>Is College Teacher?</th>
                            </tr>
                        </thead>
                        <tbody id="player-table-body"></tbody>
                    </table>
                </div>
            </div>
        </main>
    `;
    }
}
export default ListApp;