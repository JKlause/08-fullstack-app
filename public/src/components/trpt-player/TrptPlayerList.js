import Component from '../Component.js';
import TrptPlayerItem from './TrptPlayerItem.js';
import TrptPlayerTableHeader from './TrptPlayerTableHeader.js';

class TrptPlayerList extends Component {
    
    onRender(dom) {
        let keyArray = [];
        const trumpetPlayers = this.props.trumpetPlayers;
        console.log(trumpetPlayers);
        if(trumpetPlayers[0]){
            keyArray = Object.keys(trumpetPlayers[0]);
            keyArray.find(key => {
                if(key === 'id') {
                    keyArray.splice(keyArray.indexOf(key), 1);
                }
            });
        }
            
        const header = new TrptPlayerTableHeader({ keyArray });
        const tableTable = dom.querySelector('table');
        tableTable.appendChild(header.renderDOM());

        trumpetPlayers.forEach(trumpetPlayers => {
            const trptPlayerItem = new TrptPlayerItem({ trumpetPlayers });
            let tableBody = dom.querySelector('tbody');
            tableBody.appendChild(trptPlayerItem.renderDOM());
           
        });
    }

    renderHTML() {
        return /*html*/` 
        <div>
            <table>
                <tbody id="player-table-body"></tbody>
            </table>
        </div>
        `;
    }
} export default TrptPlayerList;