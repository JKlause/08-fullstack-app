import Component from '../Component.js';


class TrptPlayerItem extends Component {
    renderHTML() {
        const trumpetPlayer = this.props.trumpetPlayers;
        
        return /*html*/`  
                <tr>
                    <td>${trumpetPlayer.lastName}</td>
                    <td>${trumpetPlayer.firstName}</td>
                    <td>${trumpetPlayer.age}</td>
                    <td>${trumpetPlayer.mainType}</td>
                    <td>${trumpetPlayer.secondType}</td>
                    <td>${trumpetPlayer.mainEnsemble}</td>
                    <td>${trumpetPlayer.secondEnsemble}</td>
                    <td>${trumpetPlayer.isCollegeTeacher}</td>
                </tr>
        `;
    }
}
export default TrptPlayerItem;