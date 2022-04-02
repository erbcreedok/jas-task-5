import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviePage} from "./pages/MoviePage";
import {RickAndMortyPage} from "./pages/RickAndMortyPage";
import {SignInPage} from "./pages/SignInPage";
import {Auth} from "./context/Auth";
import {useState} from "react";

function App() {
    const [token, setToken] = useState(localStorage.getItem('idToken'))

    return (
        <Auth.Provider value={{ token, setToken }}>
            <div className="App">
                <Navbar />

                <Routes>
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movies/:id" element={<MoviePage />} />
                    <Route path="/rickandmorty/" element={<RickAndMortyPage />} />
                    <Route path="/signin/" element={<SignInPage />} />
                </Routes>
            </div>
        </Auth.Provider>
    );
}

export default App;
