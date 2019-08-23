import Component from '../Component.js';


class TrptPlayerItem extends Component {
    renderHTML() {
        const trumpetPlayer = this.props.trumpetPlayers;
        
        return /*html*/`
            <tbody id="player-table-body">
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
            </tbody>
        `;
    }
}
export default TrptPlayerItem;