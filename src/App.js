import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviePage} from "./pages/MoviePage";
import {RickAndMortyPage} from "./pages/RickAndMortyPage";
import {SignInPage} from "./pages/SignInPage";

function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/rickandmorty/" element={<RickAndMortyPage />} />
                <Route path="/signin/" element={<SignInPage />} />
            </Routes>
        </div>
    );
}

export default App;
