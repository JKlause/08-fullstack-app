import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'PDX Trumpet Players';
        return /*html*/` 
            <header>
                <img class="logo" src="assets/trumpet.png" alt="Trumpet Angel">
                <h1>${title}</h1>
                    <nav>
                        <a href="index.html">Home</a>
                        <a href="trpt-list.html">Trumpet Players</a>
                        <a href="trpt-form.html">Add A Player</a>
                    </nav>
            </header>
        `;
    }
}
export default Header;