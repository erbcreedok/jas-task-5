import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="App">
            <nav className="nav">
                <Link to="/">Fibonacci</Link>
                <Link to="/about">Factorial</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
