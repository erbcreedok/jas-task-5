import './App.css';
import {useEffect, useState} from "react";
import {fetchTopTracks} from "./fetchers/fetchTopTracks";

function App() {
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        fetchTopTracks().then((data) => setTracks(data.tracks))
    }, [])

    return (
        <div className="App">
            {JSON.stringify(tracks)}
        </div>
    );
}

export default App;
