import Component from '../Component.js';


class TrptPlayerItem extends Component {
    renderHTML() {
        
        const trumpetPlayer = this.props.trumpetPlayers;
        console.log(trumpetPlayer);
        return /*html*/`
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
        </table>
        `;
    }
}
export default TrptPlayerItem;