import Component from '../Component.js';

class TrptPlayer extends Component {
    renderHTML() {
        const trptPlayer = this.props.trptPlayer;

        return /*html*/`
            <tr>
                <td>${trptPlayer.lastName}</td>
                <td>${trptPlayer.firstName}</td>
                <td>${trptPlayer.age}</td>
                <td>${trptPlayer.mainType}</td>
                <td>${trptPlayer.secondType}</td>
                <td>${trptPlayer.mainEnsemble}</td>
                <td>${trptPlayer.secondEnsemble}</td>
                <td>${trptPlayer.isCollegeTeacher}</td>
            </tr>
        `;
    }
}
export default TrptPlayer;