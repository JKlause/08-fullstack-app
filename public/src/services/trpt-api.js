const URL = '/api';

export function getTrptPlayers() {
    const url = `${URL}/trpt-players`;

    return fetch(url)
        .then(response => response.json());
}