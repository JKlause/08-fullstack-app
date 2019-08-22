import Component from '../Component.js';
import Header from './Header.js';
import TrptPlayerList from '../trpt-player/TrptPlayerList.js';
import { getTrptPlayers } from '../../services/trpt-api.js';

class ListApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'The PDX Trumpet Player List' });
        dom.prepend(header.renderDOM());

        const list = new TrptPlayerList({ trumpetPlayers: [] });
        const table = dom.querySelector('table');
        table.appendChild(list.renderDOM());

        getTrptPlayers()
            .then(trumpetPlayers => {
                list.update({ trumpetPlayers });
            });
            
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
                    </table>
                </div>
            </div>
        </main>
    `;
    }
}
export default ListApp;