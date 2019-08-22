import Component from '../Component.js';


class TrptPlayer extends Component {
    renderHTML() {
        
        const trumpetPlayer = this.props.trumpetPlayers;
        return /*html*/`
                <tr>
                    <td>${trumpetPlayer.lastname}</td>
                    <td>${trumpetPlayer.firstname}</td>
                    <td>${trumpetPlayer.age}</td>
                    <td>${trumpetPlayer.maintype}</td>
                    <td>${trumpetPlayer.secondtype}</td>
                    <td>${trumpetPlayer.mainensemble}</td>
                    <td>${trumpetPlayer.secondensemble}</td>
                    <td>${trumpetPlayer.isCollegeTeacher}</td>
                </tr>
            `;
    }
}
export default TrptPlayer;