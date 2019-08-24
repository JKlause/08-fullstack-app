import Component from '../Component.js';
import Header from './Header.js';

class FormApp extends Component {
    onRender(dom) {
        const header = new Header({ title: 'Add A Trumpet Player' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <main>
                <div id="trumpet-form-div">
                    <h2>Add A Trumpet Player To Database</h2>
                    <form id="trumpet-form">
                            
                            <label for="last-name">Enter Last Name</label>
                                <input type="text" name="last-name" id="last-name" required>
                                <label for="first-name">Enter First Name</label>
                                <input type="text" name="first-name" id="first-name" required>
                            
                            
                                <label for="age">Enter Age</label>
                                <input type="number" name="age" id="age" min="0" max="100" required>
                            
                                <label for="type-1">Select First Type</label>
                                <select id="type-1" name="type-1" required>
                                    <option value="n/a">N/A</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="free-lance">Free-lance</option>
                                    <option value="orchestral">Orchestral</option>
                                </select>
                            
                                <label for="type-2">Select Second Type</label>
                                <select id="type-2" name="type-2" required>
                                    <option value="n/a">N/A</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="free-lance">Free-lance</option>
                                    <option value="orchestral">Orchestral</option>
                                </select>

                                <label for="main-ensemble">Enter Main Ensemble</label>
                                <input type="text" name="main-ensemble" id="main-ensemble" required>
                            
                                <label for="secondary-ensemble">Enter Secondary Ensemble</label>
                                <input type="text" name="secondary-ensemble" id="secondary-ensemble" required>
                            
                                <label>Is College Teacher?</label>
                                <div id="checkbox-div">
                                    <input type="checkbox" class="checkbox" id="teacher-true" name="is-college-teacher" value="true">
                                    <label for="teacher-true" id="teacher-true-label">True</label>
                                </div>

                                <input type="submit" id="submit-button">
                    </form>
                </div>
            </main>
        `;
    }
} 
export default FormApp;