const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        'X-RapidAPI-Key': 'adc5082072msh0760dcdf7189792p184a37jsn7fbceb199f76'
    }
};

const API_KEY = '75df4c0dd1c2d1c7cd0bbbc551f3d373'
export function fetchTopTracks() {
    return fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=${API_KEY}&format=json`)
        .then(response => response.json())
        .catch(err => console.error(err));
}
