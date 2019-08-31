import Component from '../Component.js';

class TrptPlayerTableHeader extends Component {

    onRender() {

    }
    renderHTML() {
        const keyArray = this.props.keyArray;
        
        const keyHeader = keyArray.map(key => {
            let newKey = key.replace(/([A-Z])/g, ' $1');
            let upperCase = newKey.charAt(0).toUpperCase() + newKey.slice(1);
           
            return /*html*/`
                <th>${upperCase}</th>
                `;
        });

        const htmlHeader = keyHeader.join('');
        return /*html*/`
                    <thead>
                        ${htmlHeader}
                    </thead>
                
                `;
    }
}

export default TrptPlayerTableHeader;