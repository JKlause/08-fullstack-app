import Component from '../Component.js';
import TrptPlayerItem from './TrptPlayerItem.js';
import TrptPlayerTableHeader from './TrptPlayerTableHeader.js';

class TrptPlayerList extends Component {
    
    onRender(dom) {
        let keyArray = [];
        const trumpetPlayers = this.props.trumpetPlayers;
        if(trumpetPlayers[0]){
            keyArray = Object.keys(trumpetPlayers[0]);
            keyArray.find(key => {
                if(key === 'id') {
                    keyArray.splice(keyArray.indexOf(key), 1);
                }
            });
        }
            
            


        const header = new TrptPlayerTableHeader({ keyArray });
        dom.appendChild(header.renderDOM());

        trumpetPlayers.forEach(trumpetPlayers => {
            const trptPlayerItem = new TrptPlayerItem({ trumpetPlayers });
            dom.appendChild(trptPlayerItem.renderDOM());
           
        });
    }

    renderHTML() {
        return /*html*/` 
        <table></table>
        `;
    }
} export default TrptPlayerList;