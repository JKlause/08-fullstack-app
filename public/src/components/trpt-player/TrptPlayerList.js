import Component from '../Component.js';
import TrptPlayerItem from './TrptPlayerItem.js';

class TrptPlayerList extends Component {
    
    onRender(dom) {
        const trumpetPlayers = this.props.trumpetPlayers;
        trumpetPlayers.forEach(trumpetPlayers => {
            const trptPlayerItem = new TrptPlayerItem({ trumpetPlayers });
            dom.appendChild(trptPlayerItem.renderDOM());
        });
    }

    renderHTML() {
        return /*html*/`
        <tbody id="player-table-body"></tbody>
        
        `;
    }
} export default TrptPlayerList;