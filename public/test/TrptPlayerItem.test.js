import TrptPlayer from '../src/components/trpt-player/TrptPlayerItem.js';

const test = QUnit.test;

QUnit.module('trumpet html');

test('test name', assert => {
    // arrange
    const trumpetPlayers = {
        lastName: 'Work',
        firstName: 'Jeff',
        age: 45,
        mainType: 'Orchestral',
        secondType: 'Soloist',
        mainEnsemble: 'Oregon Symphony',
        secondEnsemble:'n/a',
        isCollegeTeacher: false,
    };

    const expected = /*html*/`
        <tr>
            <td>Work</td>
            <td>Jeff</td>
            <td>45</td>
            <td>Orchestral</td>
            <td>Soloist</td>
            <td>Oregon Symphony</td>
            <td>n/a</td>
            <td>false</td>
        </tr>
`;

const props = { trumpetPlayers };
const trptPlayer = new TrptPlayer(props);
const html = trptPlayer.renderHTML();

    assert.htmlEqual(html, expected);
});